"use client";

import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Link from 'next/link';

import '@/app/globals.css';

import Nav_header from './elementos/nav_header';
import Nav_user from './elementos/nav_user';
import MenuElements from './elementos/nav_enlaces';
import Nav_footer from './elementos/nav_footer';


import { FaStar,FaStarAndCrescent,FaAward,FaBell } from "react-icons/fa";


export default function Nav({ handleClick, status }) {

    const handleInnerClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Componente>
            <div onClick={handleClick} className={`wrapper-menu ${status ? 'active' : ''}`}>
                <div className="user-menu-wrapper" onClick={handleInnerClick}>
                    <Nav_header status={status} handleClick={handleClick}/>
                    <div className="user-menu-container">
                        <Nav_user />
                        <nav className="user-menu-navigation">
                            <ul>
                                <Link href="/view-dashboard/materias/show" passHref>
                                    <MenuElements title="Materias" icon={<FaStar />}/>  
                                </Link>                            
                                <Link href="/view-dashboard/materias/register" passHref>
                                    <MenuElements title="Crear Materia" icon={<FaStar />}/>  
                                </Link>                            
                                <MenuElements title="My Activities" icon={<FaAward />}/>                              
                                <MenuElements title="My Courses and Learning Plans" icon={<FaBell />}/>                              
                                <MenuElements title="My Calendar" icon={<FaStarAndCrescent />}/>                                                          
                                <MenuElements title="Homepage - Partner Enablement" icon={<FaStar />}/>                              
                                <MenuElements title="My Activities" icon={<FaAward />}/>                              
                                <MenuElements title="My Courses and Learning Plans" icon={<FaBell />}/>                              
                                <MenuElements title="My Calendar" icon={<FaStarAndCrescent />}/>                                                          
                                <MenuElements title="Homepage - Partner Enablement" icon={<FaStar />}/>                              
                                <MenuElements title="My Activities" icon={<FaAward />}/>                              
                            </ul>
                        </nav>
                    </div>
                    <Nav_footer />
                </div>
            </div>
        </Componente>
    );
}

Nav.propTypes = {
    handleClick: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
};

const Componente = styled.div`

    .wrapper-menu {
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 500ms, opacity 500ms ease;
        z-index: 10; /* Trae el encabezado y botones al frente */
        font-family: var(--font-lexend);
    }

    .wrapper-menu.active {
        visibility: visible;
        opacity: 1;
        transition: opacity 500ms ease;
    }

    .user-menu-wrapper {
        max-width: 24.3rem;
        width: 100%;
        background: var(--color-blanco);
        height: 100vh;
        position: relative;
        transform: translateX(-100%); /* Oculto fuera de la ventana */
        transition: transform 500ms ease; /* Transición para el movimiento */
    }

    .wrapper-menu.active .user-menu-wrapper {
        transform: translateX(0); /* Desplazamiento suave hacia dentro */
    }

    .user-menu-container{
        display: flex;
        flex-direction: column;
    }

    .user-menu-navigation {
        padding: 0.5rem 0;
        height: 24.5rem;
        overflow-y: auto; /* Activa la barra de desplazamiento vertical */
    }

    .user-menu-navigation::-webkit-scrollbar {
        width: 3px; /* Grosor del scroll */
    }

    .user-menu-navigation::-webkit-scrollbar-thumb {
        background-color: #666666; /* Color del scroll */
        border-radius: 4px; /* Redondear bordes */
    }

    .user-menu-navigation::-webkit-scrollbar-track {
        background: transparent; /* Fondo del track del scroll */
    }

    

`;