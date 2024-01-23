'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, Swiper as SwiperComponent } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';



const SliderProduct = ({data}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className='sticky top-5 min-h-[500px] w-full'>
            <Swiper
                spaceBetween={0}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                { data.map(( image, index ) => (        
                    <SwiperSlide key={index}>
                        {/* <img src={ image.href } /> */}
                        <div className='w-full h-[400px] bg-zinc-700' >
                            <Image src={ image.href } fill alt="image" className='object-contain bg-zinc-700 mx-auto'/>
                        </div>
                    </SwiperSlide>
                )) }
                
            </Swiper>
     

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                { data.map(( image, index ) => (        
                    <SwiperSlide key={index}>
                        <div className='w-full h-36'>

                        <Image src={ image.href } fill alt="image" className='object-cover bg-base-200'/>
                        </div>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    )
}



export default SliderProduct;