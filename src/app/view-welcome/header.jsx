'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import '@/app/globals.css';

import Logo_Name from '@/app/components/logo-name';

export default function Header() {
    return (
        <Componente>
        <div className='container-header-welcome'>
            <div className='header-main-elements center-right pl-20'>
                <div className='header-logo'>
                    <Logo_Name size_logo={40} size_name={1.5} />
                </div>
            </div>
            <nav className='header-navigation'>
                <div className='header-navigation-test'></div>
                <div className='header-navigation-group'>
                    <div className='header-navigation-group-button center'>
                        <Link href="/auth/register" passHref>
                            <button className='group-register-button mr-10'>Registrar</button>
                        </Link>
                        <Link href="/auth/login" passHref>
                            <button className='group-signIn-button mr-10'>Ingresar</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        </Componente>
    );
}

const Componente = styled.div`

    .container-header-welcome {
        height: var(--size--header);
        display: flex;
        justify-content: space-between;
    }

    .header-main-elements {
        width: auto;
    }

    .header-logo {
        width: 100%;
    }

    .header-navigation {
        display: flex;
        justify-content: space-between;
        width: 22rem;
    }

    .header-navigation-test {
        flex-grow: 1;
    }

    .header-navigation-group {
        display: flex;
        flex-grow: 2;
    }

    .header-navigation-group-button {
        flex: 1;
        justify-content: flex-end;

        font-family: var(--font-lexend);
        font-weight: 400;
        font-size: 1rem;
    }

    .group-register-button{
        color: var(--color-azul-vibrante);
        
        border-radius: 2px;
        padding: 0.5rem 1rem;
        font-weight: bold;
    }

    .group-register-button:hover{
        background-color: #ebebeb;
    }

    .group-signIn-button {
        color: var(--ui-color-button-label-negative);
        background-color: var(--color-azul-vibrante);
        border-radius: 2px;
        padding: 0.5rem 1rem;

        
    }
`;
