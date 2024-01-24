import SidebarDashboard from "./SidebarDashboard"

const NavbarDashboard = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg rounded-2xl mb-8">
            <div className="navbar-start">
                <SidebarDashboard />
            </div>

            <Title title="Dashboard"/>
            <div className="navbar-end">
                
            </div>
        </div>
    )
}

import React from "react";
// Titulo del dashboard
interface Titleable { title: string } 

const Title: React.FC<Titleable> = ({ title }) => {
    return (
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl hidden sm:flex">{ title }</a>
        </div>
    )
}
export default NavbarDashboard