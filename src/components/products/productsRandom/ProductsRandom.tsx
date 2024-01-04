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
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    );
}

export default ProductsRandom;