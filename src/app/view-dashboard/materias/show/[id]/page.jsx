'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@/app/globals.css';
import { useParams } from 'next/navigation'; // Importa useParams
import * as apiRest from '@/app/utils/apiRest';
import Link from 'next/link';

export default function () {
    const params = useParams(); // Obtén los parámetros dinámicos
    const { id } = params; // Extrae el parámetro 'id'
    const [units, setUnits] = useState([]); 
    const [nameMateria, setnameMateria] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiRest.fetchPost('http://localhost:3333/ovacademy/subject/unidades/index', {
                    id,
                });
                setUnits(data);

                const responseNameMateria = await apiRest.fetchPost('http://localhost:3333/ovacademy/subject/show', {
                    id,
                });
                setnameMateria(responseNameMateria);

            } catch (err) {
                console.error('Error al conectar con el servidor:', err);
            }
        };
        fetchData();
    }, [id]);

    return (
        <Componente>
            <div className='layout-body'>
                <div className='container-body'>
                    <div className='banner-subjects center'>
                        <span className='banner-subjects-text ml-20'>
                            {nameMateria.nombre}
                        </span>
                    </div>
                    <div className='description-subjects-general mt-10 p-10'>
                        <p>
                            {nameMateria.descripcion || 'Sin descripción disponible.'}
                        </p>
                    </div>
                    <div className='description-content-subjects'>
                        <div className='description-content-subjects-list'>
                            <div className='course-content'>
                                <ul className='content-list'>
                                    {units.map((unit) => (
                                        <Link href={`/view-dashboard/materias/show/${id}/${unit.id}`} passHref>
                                            <li key={unit.id}>
                                                <span className='content-title'>{unit.nombre}</span>
                                                <p>{unit.descripcion || 'Sin descripción disponible.'}</p>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='description-content-subjects-test'>Details</div>
                    </div>
                </div>
            </div>
        </Componente>
    );
}

const Componente = styled.div`
    .banner-subjects {
        width: 100%;
        height: 7rem;
        background: linear-gradient(to right, #026b95, #0d1e37);
        border-radius: 0.5rem;
        justify-content: flex-start;
        color: white;
        font-family: var(--font-lexend);
    }

    .banner-subjects-text {
        font-weight: 600;
        font-size: 2rem;
    }

    .description-subjects-general {
        height: auto;
        width: 100%;
        font-family: var(--font-lexend);
        color: black;
        font-weight: 400;
        font-size: 1.3rem;
        text-align: justify;
        flex-direction: column;
    }

    .description-content-subjects {
        display: flex;
        flex-direction: row;
        height: 350px;
    }

    .description-content-subjects-list {
        height: inherit;
        flex-grow: 2;
    }
    
    .course-content {
        width: auto;
        padding: 20px;
        font-family: var(--font-lexend);
    }

    .content-list {
        list-style: none;
        padding: 0;
    }

    .content-list li {
        background: #f0f4ff;
        margin: 10px 0;
        padding: 15px;
        border-left: 5px solid #4a90e2;
        border-radius: 5px;
        transition: background 0.3s ease;
        cursor: pointer;
    }

    .content-list li:hover {
        background: #a9c4d9;
        color: white;
    }

    .content-title {
        font-weight: bold;
        font-size: 1.4em;
        color: #2c3e50;
    }

    .content-list p {
        margin: 5px 0 0;
        color: #555;
        font-size: 1.2rem;
    }

    .description-content-subjects-test {
        height: inherit;
        background-color: #f0f4ff;
        flex-grow: 1;
    }
`;
