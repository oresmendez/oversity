'use client';

import React, { useState } from 'react';
import '@/app/globals.css';
import {toast} from 'sonner'
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import * as apiRest from '@/app/utils/apiRest';
import Logo_Name_White from '@/app/components/logo-name-white';

export default function () {
    const router = useRouter();

    const [name, setNombre] = useState('');
    const [surname, setApellido] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const handleRequest = async (event) => {
        event.preventDefault();

        if (!password || !verifyPassword) {
            toast.error('Las contraseñas no pueden estar vacías');
            return;
        }

        if (password !== verifyPassword) {
            toast.error('Las contraseñas no coinciden');
            return;
        }

        const simulateServerDelay = (data) =>
            new Promise((resolve) => {
              setTimeout(() => resolve(data), 1000);
        });

        const CreateAccountPromise = new Promise(async (resolve, reject) => {
            try {
                const data = await apiRest.fetchPost('http://localhost:3333/ovacademy/user/store', {
                    name,
                    surname,
                    phone,
                    email,
                    password,
                    type_id: 1,
                });

                const delayedData = await simulateServerDelay(data);

                if (delayedData) {
                    resolve(delayedData);
                  } else {
                    reject(new Error(data.message || 'Credenciales incorrectas'));
                }
            } catch (err) {
                reject(new Error('Error al conectar con el servidor'));
            }
        });

        toast.promise(CreateAccountPromise, {
            loading: 'Creando cuenta...',
            success: () => `Cuenta creada exitosamente`,
            error: (err) => err.message || 'Ocurrió un error',
        });

        try {
            const result = await CreateAccountPromise;
            console.log(result);
            
            if (result.success) {
                
                try {
                    const data = await apiRest.fetchPost('http://localhost:3333/ovacademy/login', {
                        email, 
                        password, 
                    });
            
                    console.log('Datos recibidos:', data);
            
                    if (data) {
                        router.push('/view-dashboard');
                    } else {
                        setError(data.message || 'Credenciales incorrectas');
                    }
                } catch (err) {
                    setError('Error al conectar con el servidor');
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        
        <Componente>
            
        <div className='layout-authentication center'>
            <div className='authentication-content mt-30'>
                <Logo_Name_White/>
                <div className='create-account center'>
                    <div className='create-account-tittle mt-20'>
                        CREAR CUENTA
                    </div>
                </div>
                <form className='form-create-account mt-30' onSubmit={handleRequest}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={surname}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="verify password"
                        value={verifyPassword}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                    />
                    <button type="submit" className="button-create-account">Crear</button>
                </form>
                <p className='create-accont-text mt-20'>
                        Al registrarte estas aceptando que tus datos personales sean vistos o manipulados
                        por el personal de la academia.
                    </p>
                <Link href="/" passHref>
                    <span className='create-accont-back mt-20 pb-05'>Regresar</span>
                </Link>                
            </div>
        </div>
        </Componente>
    );
}

const Componente = styled.div`

    .layout-authentication {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow: auto; /* Permite el desplazamiento */
    }

    .authentication-content {
        max-width: 32rem;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.021);
        padding: 2rem;
        height: auto;
        z-index: 1;
        font-family: var(--font-lexend);
        overflow-y: auto;
    }

    .create-account{
        color: white;
        flex-direction: column;
    }

    .create-account-tittle{
        font-size: 2rem;
    }

    .form-create-account {
        display: flex;
        flex-direction: column;
    }

    input {
        padding:0.8rem;
        margin-bottom: 1rem;
        background-color: #d9d9d9;
    }

    .button-create-account {
        background-color: #d4eb33;
        padding:0.8rem;
    }

    .error-message {
        color: red;
        font-size: 0.9rem;
        margin-top: 1rem;
    }

    .create-accont-text{
        color: white;
        text-align: justify;
        font-size: 1.1rem;
        font-weight: 200;
    }

    .create-accont-back{
        display: inline-block;
        color: white;

        display: Flex;
        justify-content: center;
        align-items: center;
    }

    .create-accont-back:hover{
        text-decoration: underline; 
        cursor: pointer;
        
    }

`;
