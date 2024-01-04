import style from "./ProductsRandom.module.css";
import React from "react";
import ProductRandom from "./ProductsRandom.module.css"
import { FaHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function ProductsRandom() {
    return (
        <>
            <div className="w-full h-auto my-2 p-2">
                <div className="w-72 bg-base-200  drop-shadow-md rounded-lg">
                    <div className={`${ProductRandom.conteinerImg} relative overflow-hidden rounded-tl-lg rounded-tr-lg`}>
                        <img
                            className={`${ProductRandom.imgBx} hover:scale-110 transition-transform relative w-full h-auto object-cover rounded-tl-lg rounded-tr-lg select-none`}
                            src="https://www.lemeilleuravis.com/wp-content/uploads/2020/08/vibox-pyro-sa4-133-pc-gamer-10.jpg"
                            alt="Descripción de la imagen"
                        />
                        <ul className={`${ProductRandom.action} absolute`}>
                            <li className="relative list-none w-10 h-10 bg-white flex justify-center items-center m-2 cursor-pointer text-sm rounded-lg group">
                                <FaHeart className="text-primary" />
                                <span className="absolute right-12 top-5 transform -translate-y-1/2 whitespace-nowrap px-10 py-2 bg-white text-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">Agregar a favoritos.</span>
                            </li>
                            <li className="relative list-none w-10 h-10 bg-white flex justify-center items-center m-2 cursor-pointer text-sm rounded-lg group">
                                <FaCartArrowDown className="text-primary" />
                                <span className="absolute right-12 top-5 transform -translate-y-1/2 whitespace-nowrap px-10 py-2 bg-white text-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Agregar al carrito.</span>
                            </li>
                           
                        </ul>

                    </div>


                    <div className="px-5 py-3 space-y-2">
                        <h3 className="text-lg">Super computadora 64GB</h3>
                        <div className="space-x-2">
                        </div>
                        <p className="space-x-2">
                            <span className="text-2xl font-semibold text-primary">$600</span>
                            <span className="text-sm line-through text-gray-500">$1000</span>
                            <span className="text-sm bg-primary p-1 rounded-2xl badge-primary mx-10">40% off</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsRandom;