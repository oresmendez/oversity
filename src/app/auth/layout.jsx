'use client';

import Image from "next/image";
import {Toaster} from 'sonner'

export default function AuthenticationLayout({ children }) {
    return (
        <html lang="en">
            <Toaster
                position="top-right"
                expand={true}
                richColors
                toastOptions={{
                    style: {
                    fontSize: '1rem', // Usar camelCase y entre comillas para el tamaño
                    }
                }}
            />
            <body
                style={{
                    margin: 0,
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden", // Oculta el scroll del body
                }}
            >
                <div
                    style={{
                        position: "fixed",
                        width: "100vw",
                        height: "100vh",
                        zIndex: -1,
                    }}
                >
                    <Image
                        src="/images/fondo-login.png"
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        overflowY: "auto", // Permite scroll solo en el contenido
                    }}
                >
                    {children}
                </div>
            </body>
        </html>
    );
}
