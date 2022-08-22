import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider.scss";

// import required modules
import { Navigation } from "swiper";



export default function App() {

 SwiperCore.use([Autoplay])
    
    return (
        <div id="slider">
            <Swiper navigation={true} modules={[Navigation, Autoplay ]} autoplay={{delay: 3000}} className="mySwiper">
                <SwiperSlide>
                    <div className="image">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/slider-bg-new.jpg" alt="" />
                        <div className="text">
                            <h3>Presenting Perfect Cosmetics</h3>
                            <h1>Beauty that is you</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/slider-bg-new3.jpg" alt="" />
                        <div className="text1">
                            <h3>Iva Beauty Products</h3>
                            <h1>Power Clay SPF20</h1>
                            <p className="title">Long lastic formula</p>
                            <p className="description">(long hours Guarantee)</p>
                            <p className="title">Long lastic formula</p>
                            <p className="description">(long hours Guarantee)</p>
                            <img width="80%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/cream.png" alt="" />
                            <button>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/slider-bg-new2.jpg" alt="" />
                        <div className="text2">
                            <h3>Complate cosmetic solution</h3>
                            <h1>Face Moisturers <br /> to Blushes</h1>

                            <button>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
