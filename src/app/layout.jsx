"use client";

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

    if (usePathname().startsWith("/authentication")) {
        return <>{children}</>;
    }

    return (
        <html lang="en">
            <body>
                    {children}
            </body>
        </html>
    );
}
