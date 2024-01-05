import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

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
        ];
        
        // Actualizar el estado dentro del efecto   
        setDataProducts((prevData) => data);
    }, []);
    return (
        <>
            <div className="w-full h-auto my-2 p-2 flex flex-wrap">
                { dataProducts && dataProducts.map(( product ) => (
                    <ProductItem key={ product.id } {...product} />
                )) }
            </div>
        </>
    );
}

export default ProductsRandom;