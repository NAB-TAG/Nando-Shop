import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import SliderProduct from "./components/SliderProduct";
import { anton, paytone_One, poiret_one } from "@/fonts/fonts";
import { FaCartPlus, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function ProductDetail({ params }: { params: { id: string } }) {
    return (
        <div className="container mx-auto mb-10 ">
            <Breadcrumb links={[
                {name: "Inicio", href: "/"},
                {name: "Tienda", href: "/shop"},
                {name: params.id, href: "#"}
            ]}/>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 ">
                    <SliderProduct data={[
                        {href: "/assets/images/products/1.jpg"},
                        {href: "/assets/images/products/36.png"},
                        {href: "/assets/images/products/35.png"},
                        {href: "/assets/images/products/34.png"},
                        {href: "/assets/images/products/33.png"},
                        
                    ]}/>
                </div>

                <div className="w-full md:w-1/2 lg:w-2/3 mt-4 md:pl-9">
                    <h1 className={`${anton.className} text-primary text-5xl`}>NIKE AIR MAX</h1>
                    <h2 className={`${poiret_one.className} text-primary text-3xl font-semibold`}>Ropa Hombres</h2>
                    
                    <GroupOptions />

                    <Prices />

                    <p className="mt-4 mb-8">Zapatillas Nike: Estilo vanguardista y comodidad sin igual. Experimenta el rendimiento máximo con un diseño moderno que marca tendencia..</p>

                    <MoreButtons/>

                    <div className="collapse collapse-plus bg-base-200 mt-10">
                        <input type="radio" name="my-accordion-3" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            Descripcion
                        </div>
                        <div className="collapse-content"> 
                            <p>Sumérgete en la excelencia deportiva con las Zapatillas Nike, un equilibrio perfecto entre estilo y rendimiento. Estas zapatillas no solo destacan por su diseño vanguardista, sino que también ofrecen un nivel inigualable de comodidad y tecnología innovadora. La parte superior de primera calidad garantiza durabilidad y transpirabilidad, mientras que la suela intermedia proporciona una amortiguación receptiva para maximizar tu rendimiento atlético. Ya sea que estés corriendo, entrenando en el gimnasio o simplemente luciendo un look urbano, estas zapatillas se adaptan a cualquier ocasión. Descubre la fusión de moda y funcionalidad con las Zapatillas Nike, tu elección perfecta para destacar en cualquier actividad</p>
                        </div>
                    </div>
                    
                    <FeaturesAccordion />

                    <div className="collapse collapse-plus bg-base-200 mt-5">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Envios y Retornos
                        </div>
                        <div className="collapse-content"> 
                            
                        </div>
                    </div>

                    <PaymentsTypesAccordion />
                    {/* <h3 className={`text-xl text-accent mb-2 ${paytone_One.className}`}>DETALLES</h3> */}
                </div>
            </div>
        </div>
        
            
    )
  }

import { FaHeartCirclePlus, FaRegCommentDots } from "react-icons/fa6";

const GroupOptions = () => {
    return (
        <div className="flex justify-between flex-row md:justify-start w-full flex-wrap gap-1 mt-5 mb-10">
            <button className="btn p-1 md:p-3">
                4.4 <FaStar />
                <div className="badge badge-primary">En Stock</div>
            </button>
            <a href="" className="btn px-1 md:px-3 bg-base-150">
                <div className="avatar">
                    <div className="w-8 mask mask-squircle">
                        <Image src="/assets/images/avatars/user1.jpg" fill alt="Profile"/>
                    </div>
                </div>
                <span>Administrador</span>
            </a>
            <button className="btn btn-primary fixed hidden md:initial bottom-3 right-3" style={{zIndex:100}}>
                <FaRegCommentDots className="text-4xl"/>
            </button>
        </div>        
    )
}

const Prices = () => {
    return(
        <div className="flex items-center">
            <p className={`${anton.className} text-5xl text-secondary`}><sup>$</sup>199.<small>99</small></p>
            <p className={`font-bold text-xl text-secondary ml-5`}>$400 | 50% off</p>
        </div>
    )
}

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import PaymentsTypesAccordion from "./components/PaymentsTypesAccordion";
import FeaturesAccordion from "./components/FeaturesAccordion";
const MoreButtons = () => {
    return (
        <div className="flex flex-wrap gap-2 mt-5">
            <button className="btn btn-primary px-4 md:px-12">
                <RiMoneyDollarCircleFill className="text-2xl"/>
                Comprar Ahora
            </button>
            <button className="btn btn-success hidden md:initial">
                <FaCartPlus className="text-2xl text-base-100"/>
            </button>
            <button className="btn btn-error hidden md:initial">
                <FaHeartCirclePlus className="text-xl text-base-100"/>
            </button>
        </div>
    );
}