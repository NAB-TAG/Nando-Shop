import React from "react"
import type { Metadata } from 'next'

// Metadatos: Fijate que cuando pasas de home al dashboard el nombre de la pestaña cambia
export const metadata: Metadata = {
    title: 'NandoShop - Dashboard',
    description: 'Estas en el dashboard',
}

// Aqui 
type LayoutProps = {
    children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) { 
    return ( 

        <>
        <div>
            Soy el componente padre (header)
            <div>{children}</div> 
            Soy el componente padre (footer)
        </div>
        </>
    ) 
}