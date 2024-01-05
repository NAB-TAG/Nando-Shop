'use client'
import React from 'react';
import style from './SidebarNavbar.module.css'
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { BsHouse, BsShopWindow, BsChatRightDots, BsPerson, BsXLg } from "react-icons/bs";

// Start SidebarNavbar
const SidebarNavbar = () => {
    return(
        <div className="drawer">
            {/* Boton del menu que abre el drawer-side (Ln:12) */}
            <DrawerButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </DrawerButton>

            {/* Lista del drawer (Ln:37) */}
            <DrawerSide>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <label htmlFor="my-drawer" className={`${style.btnDrawerClose} btn btn-square btn-ghost drawer-button`}><BsXLg /></label>
                    <div className={`${style.navMenu} h-56`}>
                        <li>
                            <Link href='/' className='gap-4'><BsHouse className='text-xl'/> Inicio </Link>
                        </li>
                        <li>
                            <Link href='/shop' className='gap-4'><BsShopWindow className='text-xl'/> Tienda </Link>
                        </li>
                        <li>
                            <Link href='/about-us' className='gap-4'><BsPerson className='text-xl'/> Sobre Nosotros </Link>
                        </li>
                        <li>
                            <Link href='/contact' className='gap-4'><BsChatRightDots className='text-xl'/> Contacto </Link>
                        </li>
                    </div>
                </ul>
                {/* VERSIÓN NANDO: */}
                {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <label htmlFor="my-drawer" className={`${ style.btnDrawerClose } btn btn-square btn-ghost drawer-button`}>X</label>
                    <LinkItem href="/" title="Inicio"/>
                    <LinkItem href="/shop" title="Tienda"/>
                    <LinkItem href="/about-us" title="Sobre Nosotros"/>
                    <LinkItem href="/contact" title="Contacto"/>
                </ul> */}
            </DrawerSide>
        </div>
    )
}

// End SidebarNavbar

// Start : LinkItem
// interface LinkProps {
//     href: string,
//     title: string,
// }

// Renderiza un link que muestra un estilo diferente cuando estas en esa misma pagina
// const LinkItem: React.FC<LinkProps> = ({ href, title } ) => {
//     // Referencia a la ruta actual de la URL
//     const pathname = usePathname();

//     return(
//         <li>
//             <Link href={ href } className={ pathname == href ? 'bg-red' : ''}>
//                 { title }
//             </Link>
//         </li>
//     )
// }
// End : LinkItem

interface DrawerProps {
    children: React.ReactNode
}

// Start : DrawerButton
const DrawerButton: React.FC<DrawerProps> = ({children}) => {
    return(
        <>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                    {children}
                </label>
            </div>
        </>
    )
}
// End: DrawerButton

// Start: DrawerSide
// Contenido del Drawer
const DrawerSide: React.FC<DrawerProps> = ({children}) => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            { children }
        </div>
    );
}
// End: DrawerSide

export default SidebarNavbar;