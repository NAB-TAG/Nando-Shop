import style from "./ProductsRandom.module.css";
import React from "react";
import ProductRandom from "./ProductsRandom.module.css"
import { FaHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import ProductItem from "./ProductItem";

function ProductsRandom() {
    return (
        <>
            <div className="w-full h-auto my-2 p-2 flex flex-wrap">
                <ProductItem image="19.png"/>
                <ProductItem image="20.png"/>
                <ProductItem image="21.png"/>
                <ProductItem image="22.png"/>
                <ProductItem image="23.png"/>
                <ProductItem image="24.jpg"/>
                <ProductItem image="25.png"/>
                <ProductItem image="26.png"/>
                <ProductItem image="19.png"/>
                <ProductItem image="20.png"/>
                <ProductItem image="21.png"/>
                <ProductItem image="22.png"/>
            </div>
        </>
    );
}

export default ProductsRandom;