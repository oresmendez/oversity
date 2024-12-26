'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@/app/globals.css';
import * as apiRest from '@/app/utils/apiRest';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('tab1');
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

    const handleRequest = async (event) => {
        // event.preventDefault();
        const dataux = await apiRest.fetchGet('http://localhost:3333/ovacademy/user/show');
        setUserData(dataux); // Guardar los datos en el estado
    };

    useEffect(() => {
        console.log("console de user");
        handleRequest();
        
    }, []);

    return (
        <Componente>
            <div className="layout-body">
                <div className="container-body">
                    <div className="info-user">
                        <div className="info-user-menu p-10">
                            <div className='info-user-menu-tab ui-shadow-md'>
                                <button
                                    className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('tab1')}
                                >
                                    Personal Info
                                </button>
                                <button
                                    className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('tab2')}
                                >
                                    Test
                                </button>
                                <button
                                    className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('tab3')}
                                >
                                    Test
                                </button>
                            </div>
                        </div>
                        <div className='info-user-details p-10'>
                            <div className="info-user-details-tab ui-shadow-md">
                                {activeTab === 'tab1' && 
                                    <div>
                                        <div className='info-user-details-tab-tittle center-left p-10'>
                                            Información Personal
                                            <span>Gestiona los datos de tu perfil e información adicional</span>
                                        </div>
                                        <div className='info-user-details-tab-context p-10'>
                                            <div className='info-user-details-tab-context-left p-10'>
                                                <p>Nombre:  
                                                    {userData
                                                    ? `${userData.nombre}` 
                                                    : " Nombre?"}
                                                </p>
                                                <p>Apellido:
                                                    {userData
                                                    ? `${userData.apellido}` 
                                                    : " Apellido?"}
                                                </p>
                                            </div>
                                            <div className='info-user-details-tab-context-right p-10'>
                                                <p>Telefono:
                                                    {userData
                                                    ? `${userData.telefono}` 
                                                    : " Telefono?"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeTab === 'tab2' && 
                                    <div>
                                        Contenido de Tab 2
                                    </div>
                                }
                                {activeTab === 'tab3' && 
                                    <div>
                                        Contenido de Tab 3
                                    </div>
                                }
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </Componente>
    );
}

const Componente = styled.div`

    .info-user {
        display: flex;
        width: 100%;
        background-color: white;
        font-family: var(--font-lexend);
    }

    .info-user-menu{
        flex: 1;
    }

    .info-user-menu-tab {
        display: flex;
        flex-direction: column;
        background-color: inherit;
        
    }

    .tab-button {
        padding: 1.2rem 1rem;
        cursor: pointer;
        text-align: left;
        transition: background-color 0.3s;
    }

    .tab-button:hover {
        border-left: 3px solid #0465ac;
        background-color:#ebebeb;
    }

    .tab-button.active {
        background-color:#ebebeb;
        color: black;
        font-weight: bold;

    }

    .info-user-details {
        flex: 2;
        background-color: white;
        height: 100%;
    }

    .info-user-details-tab{
        padding: 1.2rem 1rem;
    }

    .info-user-details-tab-tittle{
        border-bottom: 1px solid #736464b3;
        background-color:inherit;
        font-size:1.5rem;
        flex-direction: column;
    }

    .info-user-details-tab-tittle span{
        font-size:1rem;
    }

    .info-user-details-tab-context{
        background-color: inherit;
        display:flex;
        font-size: 1.2rem;
    }

    .info-user-details-tab-context p{
        padding:1rem;
    }
    
    .info-user-details-tab-context-left{
        flex:1;
    }

    .info-user-details-tab-context-right{
        flex:1;
    }
`;
