"use client";

import React from "react";
import styled from "styled-components";

export default function Header_search_bar({ texto, rutas }) {
    // Divide el texto en partes basadas en " > "
    const breadcrumbItems = texto.split(" > ");

    return (
        <>
            <Componente>
                <div className="container-search-bar center-left">
                    <div className="search-bar-text-details">
                        {breadcrumbItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <a className="ml-05 mr-05" id={`class${item}`} href={rutas?.[item] || "#"}>{item}</a>
                                {index < breadcrumbItems.length - 1 && " > "}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Componente>
        </>
    );
}

const Componente = styled.div`

    .container-search-bar {
        background-color: var(--color-azul-oscuro-profundo);
        height: 2.35rem;
        color: var(--color-blanco);
        padding: 0 1.4rem;

        font-family: var(--font-lexend);
        font-weight: 300;
        font-size: 1rem;
    }

    .search-bar-text-details {
        padding: 0 2rem;
        font-size: 1rem;  
    }

    .search-bar-text-details a {
        color: var(--color-blanco);
        text-decoration: none;
        cursor: pointer;
    }

    .search-bar-text-details a:hover {
        text-decoration: underline;
    }
`;
