"use client";

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import Link from 'next/link';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel({ boxes, settings, sliderRef }) {
    return (
        <Componente>
            <Slider ref={sliderRef} {...settings}>
                {boxes.map((box, index) => {
                    // Generar un número aleatorio para cada elemento
                    const imageNumber = Math.floor(Math.random() * 3) + 1;

                    

                    return (
                        
                            <div key={index} className="carousel-card card">
                                <div className="card-content">
                                    <Link  href={`/view-dashboard/materias/show/${box.id}`} passHref>
                                        <div className="card-imagen center">
                                            <Image
                                                src={`/images/teacher${imageNumber}.jpeg`} // Número único por elemento
                                                alt={`Imagen teacher${imageNumber}`}
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <div className="card-content-description">
                                            <h3 className="card-title">{box.nombre}</h3>
                                            <p className="card-time">{box.id}</p>
                                            <p className="card-type">{box.descripcion}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        
                    );
                })}
            </Slider>
        </Componente>
    );
}


const Componente = styled.div`

    .carousel-card {
        padding: 10px;
        max-width: 350px;
        max-height: 350px;
        width: 350px;
        height: 350px; 
        overflow: hidden;

        font-family: var(--font-lexend);
        font-weight: 400;
        font-size: 1rem;
    }

    .card-content {
        width: 100%; 
        height: 100%;

        display: flex;
        flex-direction: column;

        background-color: #fff;
        border-radius: 8px;
        border: 1px solid #ddd;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        padding-bottom: 1rem;
    }

    .card-content:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }

    .card-imagen {
        width: 100%;
        height: 150px;
        overflow: hidden;
        border-radius: 8px 8px 0 0;
    }

    .card-imagen img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content-description {
        padding: 0.5rem 1rem; /* Ajusta el espacio interno */
        font-size: 0.9rem; /* Ajusta el tamaño de texto */
        color: #555; /* Color de texto estándar */
    }

    .card-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0.5rem 0; /* Espaciado superior e inferior */
    }

    .card-time, .card-type {
        font-size: 0.85rem;
        color: #777;
        margin: 0.2rem 0; /* Ajusta el espaciado */
    }

    
`;
