'use client';

import React, { useState } from "react";
import styled from 'styled-components';
import '@/app/globals.css';

import Header from '@/app/components/header/header-app';
import Header_search_bar from '@/app/components/header/header-search-bar';
import Nav from '@home/components/nav/main';

export default function Header_app({ texto }) {
    const [ActivarMenu, setActivarMenu] = useState(false);

    const handleActivarMenu = () => {
        setActivarMenu(!ActivarMenu);
    };

    // Rutas definidas
    const rutas = {
        Home: "/",
        dashboard: "/view-dashboard",
        materias: "/view-dashboard/materias/show",
        unidades: (id) => `/view-dashboard/materias/show/${id}`, // Genera la ruta para unidades
        contenidos: (id, contenido) => `/view-dashboard/materias/show/${id}/${contenido}`, // Genera la ruta para contenidos
    };

    return (
        <Componente>
            <div className="layout-header">
                <div className="container-header">
                    <Header status={ActivarMenu} handleClick={handleActivarMenu} />
                </div>
                <Header_search_bar
                    texto={texto}
                    rutas={rutas} // Pasamos las rutas como props
                />
            </div>
            <Nav status={ActivarMenu} handleClick={handleActivarMenu} />
        </Componente>
    );
}

const Componente = styled.div`
    .layout-header {
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: var(--size--header);
        max-height: var(--size--header);
        z-index: 10;
    }

    .container-header {
        height: inherit;
        background-color: var(--color-blanco);
        padding: 0 2.3rem;
        width: 100%;
    }
`;
