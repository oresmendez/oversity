'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@/app/globals.css';

import Carrousel_main from '@/app/components/carrousel-main';
import * as apiRest from '@/app/utils/apiRest';

export default function Subjects() {

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
        fetchData();
    }, []);

    return (
        <Componente>
            <div className='layout-body'>
                <div className='container-body'>
                    <div className='banner-subjects center'>
                        <span className='banner-subjects-text ml-20'>Chequea tus materias</span>
                    </div>
                    <div className='description-subjects-general mt-10 center p-10'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat, convallis ridiculus congue odio facilisi pretium lacinia, per aenean tellus fames maecenas primis felis. 
                        Inceptos magnis fermentum dapibus dictumst lectus magna feugiat sapien habitant fringilla, 
                        per aliquet rutrum sagittis vestibulum montes vel maecenas malesuada, lacus nulla euismod felis lacinia eleifend vehicula sed id. Phasellus ligula natoque ridiculus vel
                        </p>
                    </div>
                    <Carrousel_main
                        boxes={boxes}
                        tittle={"Materias Ofertadas"}
                        description={
                            "Explora la amplia variedad de materias disponibles diseñadas para enriquecer tus conocimientos y desarrollar tus habilidades en áreas clave"
                        }
                    />
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
    }
`;
