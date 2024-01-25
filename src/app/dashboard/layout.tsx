import React, { ReactNode } from "react"
import type { Metadata } from 'next'
import NavbarDashboard from "./components/NavbarDashboard";

// Metadatos: Fijate que cuando pasas de home al dashboard el nombre de la pestaña cambia
export const metadata: Metadata = {
    title: 'NandoShop - Dashboard',
    description: 'Estas en el dashboard',
}

// Aqui 
type LayoutProps = {
    children: React.ReactNode;
    folder1: React.ReactNode;
    folder2: React.ReactNode;
    widgets: React.ReactNode;
}
export default function RootLayout({children, folder1, folder2, widgets}: LayoutProps) { 
    return ( 

        <>
        <div className="container mx-auto flex justify-center flex-col">
            
            {/* <div>{ notifications}</div> */}
            <NavbarDashboard />
            {/* <div>
                { widgets }
                { folder1 }
            </div> */}
            {/* <div> */}
                { widgets }
                { folder1 }
                {/* {children} */}
            {/* </div>  */}
            
        </div>
        </>
    ) 
}