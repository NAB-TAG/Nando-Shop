'use client'
import Image from "next/image";
import { montserrat, anton, poiret_one, paytone_One } from "@/fonts/fonts";
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import style from './ProductsOffers.module.css';
import './productsOffers.css'
import { SwiperSlide } from "swiper/react";
import { SliderCustomHelpers } from "@/utils/helpers/SliderCustomHelpers";

const ProductsOffers: React.FC = () => {
    // const [selectedId, setSelectedId] = useState(null)
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const items = [
        {id:1, subtitle: "subtitulo", title: "titulo", image: "/assets/images/products/15.png"},
        {id:2, subtitle: "subtitulo2", title: "titulo2", image: "/assets/images/products/16.png"},
        {id:3, subtitle: "subtitulo3", title: "titulo3", image: "/assets/images/products/17.png"},
        {id:4, subtitle: "subtitulo4", title: "titulo4", image: "/assets/images/products/18.png"},
        {id:5, subtitle: "subtitulo5", title: "titulo5", image: "/assets/images/products/12.png"},
        {id:6, subtitle: "subtitulo5", title: "tjitulo5", image: "/assets/images/products/16.png"},
        {id:7, subtitle: "subtitulo5", title: "titulo5", image: "/assets/images/products/16.png"},
    ];
    const selectedItem = items.find((item) => item.id === selectedId);

    return(
        <article className="prose">
            <h2 className={`${montserrat.className} text-3xl mb-5`}>Nuestros Productos en Ofertas</h2>

            <div className={` ${style.content}`}>
                <div className={style.listProducts}>
                    <SliderCustomHelpers.perView>

                    {
                        items.map(item => (
                            <SwiperSlide key={item.id} className={style.swiperSlide}>

                                <motion.div layoutId={String(item.id)} className={`card bg-base-200 relative ${style.product}`} onClick={() => setSelectedId(item.id)}>
                                        <div className="badge badge-primary gap-2 top-3 right-3 absolute">
                                            <span className="text-sm">-30%</span>
                                        </div>
                                    <Image alt="Tailwind CSS Navbar component" src={item.image} width='150' height="100" quality={10}/>
                                </motion.div>
                                
                            </SwiperSlide>
                            
                        ))
                    }
                    </SliderCustomHelpers.perView>
                    
                </div>
                <AnimatePresence>
                    {selectedId && (
                            <div className="w-screen h-screen flex fixed top-0 left-0 " style={{zIndex: "100000000", backgroundColor: '#0006'}}>
                                <motion.div layoutId={String(selectedId)} className={`card m-auto shadow-xl bg-base-200 inset-y-0 inset-x-0 ${style.modal}`} >
                                    <div className="w-screen sm:w-[30rem] md:w-[48rem] h-full flex flex-col p-0">

                                        {/* <div className={`card flex w-96 shadow-xl bg-primary inset-y-0 inset-x-0 `}>
                                            perrorne
                                        </div> */}
                                        <div className="h-full justify-end">
                                            <button className={` z-30 btn btn-square btn-sm absolute ${style.btnClose}`} onClick={() => setSelectedId(null)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>

                                            <div className="flex justify-between items-center h-full bg-primary card overflow-hidden flex sm:flex-col md:flex-row relative" style={{zIndex: "10"}}>
                                                <div className="h-48 w-full md:h-full sm:h-40 sm:w-full md:w-1/2 md:h-full bg-base-200 absolute" style={{zIndex:"15"}}></div>
                                                <div className=" w-1/2 h-48 sm:h-40 md:h-full flex items-center justify-center" style={{zIndex:"40"}}>
                                                    <Image alt="Tailwind CSS Navbar component" className="sm:hover:rotate-[20deg] sm:hover:translate-y-10 md:hover:rotate-45 duration-300" src={String(selectedItem?.image)} width={380} height={200} />
                                                </div>
                                                <div className="sm:w-full md:w-1/2 h-full p-7">
                                                    <div className={`${style.modalContentHeader} mb-5`}>
                                                        <h3 className={`${anton.className} text-base-200 text-4xl`}>NIKE AIR MAX</h3>
                                                        <span className={`${poiret_one.className} text-base-200 text-2xl font-semibold`}>Ropa Hombres</span>
                                                    </div>
                                                    
                                                    <div className="modalOffert__description mb-5">
                                                        <h3 className={`text-xl text-base-200 mb-2 ${paytone_One.className}`}>DETALLES</h3>
                                                        <span className="text-theme text-base-200">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                            Nemo modi cumque delectus est suscipit aperiam.
                                                        </span>
                                                    </div>

                                                    <div className="mb-5">
                                                        <span className={`text-xl mb-5 text-base-200 ${paytone_One.className}`}>SIZES</span>
                                                        <div className="modalOffert__sizes">
                                                            <div className="btn btn-square ">38</div>
                                                            <div className="btn btn-square ">39</div>
                                                            <div className="btn btn-square ">40</div>
                                                            <div className="btn btn-square ">41</div>
                                                            <div className="btn btn-square ">42</div>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between mt-5">
                                                        <p className={`${anton.className} text-5xl text-base-200`}><sup>$</sup>199.<small>99</small></p>
                                                        <a href="#" className="btn btn-primary text-xl  align-center hover:btn-secondary">Ver Mas</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        

                                        {/* <p>We are using cookies for no reason.</p> */}
                                    </div>
                                

                        </motion.div>
                            </div>
                        
                    )}
                </AnimatePresence>
            </div>

        </article>
    )
}

export default ProductsOffers;