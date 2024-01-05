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
                <ProductItem image="19.png" name="Example 1"/>
                <ProductItem image="20.png" name="Example 2"/>
                <ProductItem image="21.png" name="Example 3"/>
                <ProductItem image="22.png" name="Example 4"/>
                <ProductItem image="23.png" name="Example 5"/>
                <ProductItem image="24.jpg" name="Example 6"/>
                <ProductItem image="25.png" name="Example 7"/>
                <ProductItem image="26.png" name="Example 8"/>
                <ProductItem image="19.png" name="Example 9"/>
                <ProductItem image="20.png" name="Example 10"/>
                <ProductItem image="21.png" name="Example 11"/>
                <ProductItem image="22.png" name="Example 12"/>
            </div>
        </>
    );
}

export default ProductsRandom;