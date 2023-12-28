import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import HeroFactory from "../factories/HeroFactory";
import { HerosCustomHelpers } from "./HerosCustomHelpers";

interface Childreable{
    children?: React.ReactNode;
}
interface Datasable{
    datas: Record<string, any>;
}

export namespace SliderCustomHelpers{
    export interface SimplePropsHelper extends Childreable{}
    export const simple: React.FC<SimplePropsHelper> = ({children}) => {
        return(
            <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-80 z-20 w-2/3"
            >
                {children}            
            </Swiper>
        )
    }
    export interface HeroCustomHelper extends Datasable{ className?: string}
    export const heroCustomHelper: React.FC<HeroCustomHelper> = ({datas, className = ''}) => {
        return(
            <Swiper
                    pagination={{dynamicBullets: true,}}
                    modules={[Pagination]}
                    className={`mySwiper ${className}`}
            >
                {
                    datas.map((data:HerosCustomHelpers.SimplePropsHelper | HerosCustomHelpers.SimpleDescriptionPropsHelper | HerosCustomHelpers.LoginPropshelper,index:number) => {
                        return (
                            <SwiperSlide key={index}>
                                {renderHero(data)}
                            </SwiperSlide>
                        )
                    })
                }      
            </Swiper>
        )
    }
    export interface SimplePropsHelper extends Childreable{}
    export const perView: React.FC<Childreable> = ({children}) => {
        return (
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {children}
            </Swiper>
        )
    }
    const renderHero = (data: 
        HerosCustomHelpers.SimplePropsHelper
         | HerosCustomHelpers.SimpleDescriptionPropsHelper 
         | HerosCustomHelpers.LoginPropshelper
    ) => {
        switch (data.type) {
            case 'simple':
                return <HerosCustomHelpers.simple {...(data as HerosCustomHelpers.SimplePropsHelper)} />;
            case 'simple-description':
                return <HerosCustomHelpers.simpleDescription {...(data as HerosCustomHelpers.SimpleDescriptionPropsHelper)} />;
            case 'login':
                return <HerosCustomHelpers.login {...(data as HerosCustomHelpers.LoginPropshelper)} />;
            case 'custom-1':
                return <HerosCustomHelpers.custom1 {...(data as HerosCustomHelpers.Custom1PropsHelper)} />;
            default:
                return null;
        }
    };
}