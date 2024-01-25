'use client'


const SidebarDashboard = () => {
    return (
        <div className="drawer drawer-start">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            
            <ButtonSidebar />

            <SideSidebar>
                
                <Accordion title="Productos" items={[
                    { href: 'products', title: 'Ver Productos' },
                    { href: 'products-ban', title: 'Dar de baja' },
                ]}/>
            </SideSidebar>
        </div>
    )
}

// Boton del Sidebar
import { MdMenuOpen } from "react-icons/md";
interface ButtonProps { children? : React.ReactNode }
const ButtonSidebar: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-square btn-ghost flex justify-end">
                { children ? children : 
                    <MdMenuOpen className="text-3xl" />
                }
            </label>
        </div>
    )
}

// Lista del sidebar
import React from "react";
import { BsXLg } from "react-icons/bs";
import Accordion from "@/components/accordion/Accordion";
interface SideProps { children: React.ReactNode; }

const SideSidebar: React.FC<SideProps> = ({ children }) => {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <ButtonSidebar>
                    <label htmlFor="my-drawer-4" className={` btn btn-square btn-ghost drawer-button`}>
                        <BsXLg />
                    </label>
                </ButtonSidebar>
                { children }
            </ul>
        </div>
    );
}

export default SidebarDashboard