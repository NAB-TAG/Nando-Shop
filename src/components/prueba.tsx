"use client"
import React from "react";

interface PropsPrueba {
    funcion: () => void
}
const Prueba:React.FC<PropsPrueba> = ({ funcion }) => {
    const handleClick = () => {
        console.log("Me clickeaste")
        funcion()
    }
    return (
        <>
            <h1 onClick={handleClick}>Componente de prueba</h1>
        </>
    )
}

export default Prueba;