"use client"

import { SliderCustomHelpers } from "@/utils/helpers/SliderCustomHelpers";
import React from "react";
const AdsHome: React.FC = () => {
    // Informacion para Crear un slider de anuncios
    const data1 = [
        {id:1, type: 'custom-1', title: 'Tenes que crear tu propio anuncio', btnText: 'Descubre Ahora', description: 'Explora nuestra nueva colección de moda primaveral. Desde colores vibrantes hasta diseños frescos, encuentra la inspiración para tu guardarropa.' },
        {id:2, type: 'custom-1', title: 'Banana', btnText: 'Boton Tocar',description: "Esta es la descripcion de banana" },
    ]
    // Que sean un slider con dos anuncios con un width:100%
    // Escribe tu componente aqui
    return(
        // Recuerda que yo ya cree la logica para que puedas crear un slider con anuncios.
        // Son clases de tailwind
        <div>
            <SliderCustomHelpers.heroCustomHelper datas={data1} className='z-20 flex items-center w-full xl:w-2/3 xl:h-4/6 lg:h-auto lg:w-full' />
        </div>
    )
}

export default AdsHome;