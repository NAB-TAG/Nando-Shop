"use client"

import AdsHome from "@/components/ads/AdsHome";
import Hero from "@/components/heros/Hero";

import ProductsOffers from "@/components/products/productsOffers/ProductsOffers";
import ProductsRandom from "@/components/products/productsRandom/ProductsRandom";
import { store } from "@/redux/store";

import { useEffect } from "react"
import { Provider } from "react-redux"
export default function Home() {
  useEffect(()=>{
    const themeStorage: string = localStorage.getItem('nandoshop_theme') || 'nando';
    const htmlDom = document.querySelector('html');
    htmlDom?.setAttribute('data-theme', themeStorage);

  },[])

  return (
    <>
    
      

        <div className="container mx-auto mb-10 ">
          

            <Hero />

            <ProductsOffers />  
            <ProductsRandom />
            {/* <AdsHome /> */}

        </div>
    </>
  ) 
}
