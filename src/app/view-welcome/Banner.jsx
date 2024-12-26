'use client';

import React from 'react';
import styled from 'styled-components';

import '@/app/globals.css';

export default function Banner() {

    return (
        <Componente>
        
            <div className="body-banner">
                
                <img
                    src="https://cdn5.dcbstatic.com/files/c/y/cyberark_docebosaas_com/themes/64a54cf2f4de0046c91b421c73148edf2ec3b8e2.png"
                    alt="Banner Intro"
                    className="banner-image"
                />

                <div className="banner-text">
                    <div className='banner-text-title'>
                        Academia Universitaria
                    </div>
                    <div className='banner-text-description center'>
                    Avanza y potencia tus habilidades, 
                    transformando tus conocimientos con recursos digitales de aprendizaje innovadores.
                    </div>
                    
                </div>
            </div>
            
        </Componente>
    );
}

const Componente = styled.div`
    
    
    .body-banner {
        position: relative;
        height: 330px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .banner-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .banner-text {
        
        color: white;
        max-width:700px;
        margin: 0 auto;
        position: relative;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;

        font-family: var(--font-lexend);
        
        
    }  

    .banner-text-title {
        font-weight: 600;
        font-size: 2.8rem;
    }

    .banner-text-description{
        margin-top: 1rem;
        font-weight: 200;
        font-size: 1.2rem;

        text-align: center;
    }

    

    
`;
