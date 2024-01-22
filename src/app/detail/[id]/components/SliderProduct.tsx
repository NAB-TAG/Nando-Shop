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

interface SliderProps {
    data: {href: string}[]
}

const SliderProduct: React.FC<SliderProps> = ({data}) => {
    const imageRef = useRef<HTMLImageElement  | null>(null);
 
    
    const handleMouseEnter = () => {
        console.log('Mouse entered!');
        if (imageRef.current) {
            console.log(imageRef.current);

            imageRef.current.style.width = "300px";
            
        }    
          
    }

    const [thumbsSwiper, setThumbsSwiper] = useState<typeof SwiperComponent | null>(null);


    return (
        <div className='sticky top-0 '>
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
                        <div className='w-full h-[400px] bg-zinc-700' onMouseEnter={handleMouseEnter}>
                            <Image src={ image.href } fill alt="image" ref={imageRef} className='object-contain bg-zinc-700 mx-auto'/>
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