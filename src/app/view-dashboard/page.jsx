'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import '@/app/globals.css';

import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiExamFill } from "react-icons/pi";

export default function dashboard_page() {

    return (
        <Componente>
            <div className='layout-body'>
                <div className='container-body'>
                    <div className='banner-dashboard center'>
                        <span className='banner-dashboard-text'>Entrenamiento Digital</span>
                        {/* <p className='banner-dashboard-slogan'>¡Impulsa tus habilidades digitales al siguiente nivel!</p> */}
                        <p className='banner-dashboard-description'>Con nuestras herramientas y recursos, estarás preparado para enfrentar cualquier reto tecnológico. Aprende, crece y destaca.</p>
                    </div>
                    <div className='options-dashboard center'>
                        <div className='options-dashboard-container center mr-10'>
                            <Link className='center' href="view-dashboard/materias/show" passHref>
                                <div className='options-dashboard-container-logo'>
                                    <HiOutlineComputerDesktop size={60}/>
                                </div>
                                <div className='options-dashboard-container-text ml-20'>
                                    Chequea tus materias
                                </div>
                            </Link>
                        </div>
                        <div className='options-dashboard-container center ml-10 mr-10'>
                            <Link className='center' href="/login" passHref>
                                <div className='options-dashboard-container-logo'>
                                    <HiOutlineComputerDesktop size={60}/>
                                </div>
                                <div className='options-dashboard-container-text ml-20'>
                                    Chequea tus materias
                                </div>
                            </Link>
                        </div>
                        <div className='options-dashboard-container center ml-10 '>
                            <Link className='center' href="/login" passHref>
                                <div className='options-dashboard-container-logo'>
                                    <PiExamFill size={60}/>
                                </div>
                                <div className='options-dashboard-container-text ml-20'>
                                    Evaluaciones
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>            
            </div>
        </Componente>
    );
}

const Componente = styled.div`

   .banner-dashboard {
        width: 100%;
        height: 10rem;
        background: linear-gradient(to right, #33b0e4, #0d213a); /* Degradado de azul a rojo */
        border-radius: 0.5rem;
        flex-direction: column;
        color: white;
        font-family: var(--font-lexend);
    }

    .banner-dashboard-text{
        
        font-weight: 600;
        font-size: 2rem;

    }

    .banner-dashboard-slogan {
        font-size: 1.5rem;
        font-weight: 100;
        margin: 5px 0;
    }

    .banner-dashboard-description {

        font-size: 1.2rem;
        font-weight: 300;
        margin-top: 0.5rem;
        line-height: 1.5;
    }

    .options-dashboard{
        width: 100%;
        height: 200px;
        justify-content: space-around;
    }

    .options-dashboard-container{
        
        flex: 1;

        height: 7.5rem;
        background-color: #c7ddec;
        overflow: hidden;
        border-radius: 0.5rem;

        color:#15324c;
        font-family: var(--font-lexend);
        font-size: 1.5rem;
        font-weight: 600;

        cursor: pointer;
    }

    .options-dashboard-container-logo{

    }

    .options-dashboard-container-text{

    }




`;