import React from "react"
import type { Metadata } from 'next'
import SidebarDashboard from "./components/SidebarDashboard";
import NavbarDashboard from "./components/NavbarDashboard";

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
        <div className="container mx-auto">
            <NavbarDashboard />
            <div>{children}</div> 
            
        </div>
        </>
    ) 
}