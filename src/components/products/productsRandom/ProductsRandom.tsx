import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { montserrat } from "@/fonts/fonts";

export interface ProductPropsInterface{
    id: number;
    image: string;
    name: string;
    price: number;
    discount: number;
}

function ProductsRandom() {

    const [ dataProducts, setDataProducts ] = useState<ProductPropsInterface[] | null>(null);

    
    useEffect(() => {
        const data = [
            { id: 1, name: "Example 1", price: 100, discount: 20, image: "19.png" },
            { id: 2, name: "Example 2", price: 100, discount: 20, image: "20.png" },
            { id: 3, name: "Example 3", price: 100, discount: 20, image: "21.png" },
            { id: 4, name: "Example 4", price: 100, discount: 20, image: "22.png" },
            { id: 5, name: "Example 5", price: 100, discount: 20, image: "23.png" },
            { id: 6, name: "Example 6", price: 100, discount: 20, image: "24.jpg" },
            { id: 7, name: "Example 7", price: 100, discount: 20, image: "25.png" },
            { id: 8, name: "Example 8", price: 100, discount: 20, image: "26.png" },
            { id: 9, name: "Example 9", price: 100, discount: 20, image: "27.png" },
            { id: 10, name: "Example 10", price: 100, discount: 20, image: "28.png" },
            { id: 11, name: "Example 11", price: 100, discount: 20, image: "29.png" },
            { id: 12, name: "Example 12", price: 100, discount: 20, image: "30.png" },
            
        ];
        
        // Actualizar el estado dentro del efecto   
        setDataProducts((prevData) => data);
    }, []);
    return (
        <>
            <h2 className={`${montserrat.className} text-3xl my-5`}>Tambien puede gustarte.</h2>
            <div className="w-full h-auto mb-2 p-2 flex flex-wrap">
                { dataProducts && dataProducts.map(( product ) => (
                    <ProductItem key={ product.id } {...product} />
                )) }
                <div className="join m-[10px]">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
        </>
    );
}

export default ProductsRandom;