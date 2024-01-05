import Image from "next/image";
import ProductRandom from "./ProductsRandom.module.css"
import { FaHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { ProductPropsInterface } from "./ProductsRandom";
import { MathHelpers } from "@/utils/helpers/MathHelpers";
// interface ProductProps {
//     id: number;
//     image: string;
//     // name: string;
//     // price: number;
//     // discount: number;
// }

const ProductItem: React.FC<ProductPropsInterface> = ({ image, name, discount, price, id }) => {
    return(
        <div className="min-[340px]:w-full min-[450px]:w-1/2 md:w-1/3 lg:w-1/4  bg-base-200 border-[10px] border-base-100 rounded-lg">
            <div className={`${ProductRandom.conteinerImg} relative overflow-hidden rounded-tl-lg rounded-tr-lg`}>
                <div className="h-56">
                    <img
                        className={`${ProductRandom.imgBx} hover:scale-110 transition-transform relative w-full h-full rounded-tl-lg rounded-tr-lg select-none object-cover`}
                        src={`/assets/images/products/${image}`}
                        alt="Descripción de la imagen"
                    />
                </div>
                <ul className={`${ProductRandom.action} absolute`}>
                    <li className="relative list-none w-10 h-10 bg-white flex justify-center items-center m-2 cursor-pointer text-sm rounded-lg group">
                        <FaHeart className="text-primary" />
                        <span className="absolute right-12 top-5 transform -translate-y-1/2 whitespace-nowrap px-2 py-2 bg-white text-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">Agregar a favoritos.</span>
                    </li>
                    <li className="relative list-none w-10 h-10 bg-white flex justify-center items-center m-2 cursor-pointer text-sm rounded-lg group">
                        <FaCartArrowDown className="text-primary" />
                        <span className="absolute right-12 top-5 transform -translate-y-1/2 whitespace-nowrap px-2 py-2 bg-white text-primary rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Agregar al carrito.</span>
                    </li>
                    
                </ul>

            </div>


            <div className="px-5 py-3 space-y-2">
                <h3 className="text-lg">{ name }</h3>
                <div className="flex flex-row justify-between">
                    <div className="space-x-2 flex flex-col">
                        <span className="text-2xl font-semibold text-primary">${ MathHelpers.discount( price, discount ) }</span>
                        <span className="text-sm line-through text-gray-500">${ price }</span>
                    </div>
                    <div className="flex items-end">
                        <span className="text-sm bg-primary p-1 rounded-2xl badge badge-primary h-min">-{ discount }%</span>
                    </div>
                </div>
                    
                
            </div>
        </div>
    )
}

export default ProductItem;