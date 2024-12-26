"use client";

import React from 'react';
import '@/app/globals.css';

import { usePathname } from "next/navigation";

import Header_app from '@/app/components/header/main';

export default function Dashboard({ children }) {
    const pathname = usePathname();

    // Mapea las rutas a sus textos
    const routeMap = {
        "/view-dashboard": "Home > dashboard",
        "/view-dashboard/materias/show": "Home > dashboard > materias",
        "/view-dashboard/materias/show/[id]": "Home > dashboard > materias > unidades",
        "/view-dashboard/materias/show/[id]/[contenidos]": "Home > dashboard > materias > unidades > contenidos",
        "/view-dashboard/user": "Home > dashboard > user",
    };

    // Determinamos el texto del encabezado con lógica dinámica
    let headerText = "Default View";
    if (pathname.startsWith("/view-dashboard/materias/show")) {
        const segments = pathname.split("/");
        if (segments.length === 6) {
            // Vista de contenidos dinámicos
            headerText = routeMap["/view-dashboard/materias/show/[id]/[contenidos]"];
        } else if (segments.length === 5) {
            // Vista de unidades dinámicas
            headerText = routeMap["/view-dashboard/materias/show/[id]"];
        } else {
            // Vista general de materias
            headerText = routeMap["/view-dashboard/materias/show"];
        }
    } else {
        // Busca coincidencias en rutas estáticas
        headerText = routeMap[pathname] || "Default View";
    }

    return (
        <main>
            <Header_app texto={headerText} />
            {children}
        </main>
    );
}
