'use client';
import '@/app/globals.css';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import * as apiRest from '@/app/utils/apiRest';
import Carrousel_main from '@/app/components/carrousel-main';

export default function App() {
    const params = useParams();
    const router = useRouter();
    const { id, contenidos } = params || {};
    const [boxes, setBoxes] = useState([]);
    const [nameMateria, setNameMateria] = useState({}); // Cambiado a objeto
    const [nameUnidad, setNameUnidad] = useState({}); // Cambiado a objeto

    // Manejo de eventos para redirección
    useEffect(() => {
        const handleClick = (event) => {
            if (event.target.id === 'classunidades') {
                router.push(`/view-dashboard/materias/show/${id}`);
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [id, router]);

    // Lógica para obtener datos desde la API
    useEffect(() => {
        const fetchData = async () => {
            if (!id || !contenidos) {
                console.warn('Faltan parámetros para realizar las solicitudes.');
                return;
            }

            try {
                const [responseNameMateria, responseNameUnidad, responseBoxes] = await Promise.all([
                    apiRest.fetchPost('http://localhost:3333/ovacademy/subject/show', { id }),
                    apiRest.fetchPost('http://localhost:3333/ovacademy/subject/unidades/show', { id: contenidos }),
                    apiRest.fetchPost('http://localhost:3333/ovacademy/subject/unidades/contents/index', { contenidos }),
                ]);

                setNameMateria(responseNameMateria);
                setNameUnidad(responseNameUnidad);
                setBoxes(responseBoxes);
            } catch (err) {
                console.error('Error al conectar con el servidor:', err);
            }
        };

        fetchData();
    }, [id, contenidos]);

    return (
        <Componente>
            <div className="layout-body">
                <div className="container-body">
                    <div className="banner-subjects">
                        <span className="banner-subjects-text ml-20">
                            {nameMateria?.nombre || 'Nombre de la materia'}
                        </span>
                        <span className="banner-subjects-subtext ml-30 mt-10">
                            {nameUnidad?.nombre || 'Nombre de la unidad'}
                        </span>
                    </div>
                    <div className="description-subjects-general mt-10 p-10">
                        <p>
                            {nameUnidad?.descripcion || 'Descripción no disponible.'}
                        </p>
                    </div>
                    <a className="ml-05 mr-05">
                        <Carrousel_main 
                            boxes={boxes} 
                            tittle="Contenido Programático" 
                            description="En este contenido programático encontrarás una guía estructurada que te permitirá comprender 
                            los conceptos clave y objetivos de aprendizaje de esta materia. Diseñado para brindarte una experiencia educativa completa, 
                            este material incluye temas esenciales, explicaciones detalladas y actividades que te ayudarán a reforzar tus conocimientos."
                        />
                    </a>
                </div>
            </div>
        </Componente>
    );
}

const Componente = styled.div`
    .banner-subjects {
        width: 100%;
        height: 9rem;
        background: linear-gradient(to right, #026b95, #0d1e37);
        border-radius: 0.5rem;
        color: white;
        font-family: var(--font-lexend);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .banner-subjects-text {
        font-weight: 600;
        font-size: 2rem;
    }

    .banner-subjects-subtext {
        font-weight: 400;
        font-size: 1.3rem;
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
