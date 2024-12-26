'use client';

import { useState, useRef } from "react";
import styled from 'styled-components';
import Carrousel from '@/app/components/carrousel';
import '@/app/globals.css';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Botones personalizados
const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow center prev-arrow wrapper-shadow-button" onClick={onClick}>
        <IoIosArrowBack />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="custom-arrow center next-arrow wrapper-shadow-button" onClick={onClick}>
        <IoIosArrowForward />
    </button>
);

export default function Carrousel_main({ boxes, tittle, description }) {
    const sliderRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5; // Número de elementos que se muestran por página
    const slidesToScroll = 3; // Número de elementos que se desplazan al navegar

    // Calcula el total de páginas (asegura al menos 1 página)
    const totalPages = Math.max(1, Math.ceil(boxes.length / itemsPerPage));

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: Math.min(itemsPerPage, boxes.length), // Mostrar solo los elementos disponibles
        slidesToScroll: slidesToScroll,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        draggable: true,
        cssEase: "ease-in-out",
        arrows: false,
        afterChange: (currentSlideIndex) => {
            if (totalPages === 1) {
                setCurrentPage(1);
            } else {
                const newPage = Math.ceil((currentSlideIndex + 1) / slidesToScroll);
                setCurrentPage(newPage > totalPages ? totalPages : newPage);
            }
        },
    };

    return (
        <Componente>
            <div className="container-subjects">
                <div className="description-subjects center">
                    <div className="content-subjects">
                        <span className="title-content-subjects">{tittle}</span>
                        <span className="description-content-subjects">
                            {description}
                        </span>
                    </div>
                    <div className="botones-carrousel-subjects mr-10 center">
                        <div className="center mr-20">{`${currentPage}/${totalPages}`}</div>
                        <div className="navigation-controls top-controls center">
                            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
                        </div>
                    </div>
                </div>
                <div className="carousel-container">
                    <Carrousel boxes={boxes} settings={settings} sliderRef={sliderRef} />
                </div>
            </div>
        </Componente>
    );
}

const Componente = styled.div`
  
    .container-subjects {
        max-width:95rem;
        margin: 2rem auto;

    }

    .description-subjects{
        justify-content: space-between;
    }

    .content-subjects {
        display: flex;
        flex-direction: column;
        font-family: var(--font-lexend);
        font-weight: 400;
    }

    .title-content-subjects{
        font-size: 1.2rem;
    }

    .description-content-subjects{
        margin-top: 0.5rem;
        font-weight: 300;
    }

    .botones-carrousel-subjects{
        justify-content: space-between;
    }

    .navigation-controls {
        margin: 10px 0;
        gap: 10px;
    }

    .top-controls {
        margin-bottom: 10px;
    }
    
    .carousel-container {
        margin-top: 20px;
    }

    .custom-arrow {
        background: white;
        color: black;
        padding: 0.7rem;
        border-radius: 5px;
        font-size: 1.2rem;
    }

    .custom-arrow:hover {
        cursor: pointer;
        background: #ebebeb;
    }

`;