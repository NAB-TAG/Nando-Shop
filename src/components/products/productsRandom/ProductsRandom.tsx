import style from "./ProductsRandom.module.css";
import React from "react";
import { FaHeart } from "react-icons/fa6";

function ProductsRandom() {
    return (
        <>
            <div className="w-full h-auto my-2 p-2">
                <div className="w-72 bg-base-200  drop-shadow-md rounded-lg">
                    <img className="relative object-cover rounded-tl-lg rounded-tr-lg select-none"
                        src="https://www.lemeilleuravis.com/wp-content/uploads/2020/08/vibox-pyro-sa4-133-pc-gamer-10.jpg" />
                    <div className="px-5 py-3 space-y-2">
                        <h3 className="text-lg">Super computadora 64GB</h3>
                        <div className="space-x-2">
                        </div>
                        <p className="space-x-2">
                            <span className="text-2xl font-semibold text-primary">$600</span>
                            <span className="text-sm line-through text-gray-500">$1000</span>
                            <span className="text-sm bg-primary p-1 rounded-2xl top-0 right-1 absolute mt-2 badge-primary mx-10">40% off</span>
                        </p>
                        <div className="flex justify-between items-center pt-3 pb-2">
                            <a href="#"
                                className="px-4 py-2 bg-red-600 hover:bg-red-800 text-center text-sm text-white rounded duration-300">
                               Agregar al carrito</a>

                            <FaHeart href="#" title="Add to Favorites" className="text-2xl text-gray-300 hover:text-red-500 duration-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsRandom;