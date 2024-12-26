'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/app/globals.css';

import Header from '@/app/view-welcome/header';
import Banner from '@/app/view-welcome/Banner';
import Header_search_bar from '@/app/components/header/header-search-bar';
import Carrousel_main from '@/app/components/carrousel-main';
import * as apiRest from '@/app/utils/apiRest';

export default function Main() {

    const [boxes, setBoxes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiRest.fetchGet('http://localhost:3333/ovacademy/subject/index');
                setBoxes(data);
            } catch (error) {
                console.error('Error al obtener las materias:', error);
            }
        };

        Cookies.remove('user-data', {
            secure: true,
            sameSite: 'Strict',
        });

        fetchData();
    }, []);

    return (
        <Componente>
            <div className='layout-header'>
                <div className='container-header'>
                    <Header />
                </div>
                <Header_search_bar texto={"Inicio"}/>
            </div>
            <div className="layout-body">
                <div className="container-banner">
                    <Banner />
                </div>
                <Carrousel_main boxes={boxes} tittle={"Materias Ofertadas"} description={"Explora la amplia variedad de materias disponibles diseñadas para enriquecer tus conocimientos y desarrollar tus habilidades en áreas clave"}/>
            </div>
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
        z-index: 1000;
    }

    .container-header {
        height: inherit;
        background-color: var(--color-blanco);
        padding: 0 1.1rem;
        width: 100%;
    }

    .layout-body {
        margin-top: 5.9rem;
    }

    .container-banner {
        
    }

    
`;