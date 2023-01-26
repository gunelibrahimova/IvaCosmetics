import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider.scss";

// import required modules
import { Navigation } from "swiper";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSliderAction } from "../../redux/Actions/SliderAction";



export default function App() {
    const {sliders} = useSelector((state) => state.sliders)
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSliderAction())
    }, [])


    SwiperCore.use([Autoplay])

    return (
        <div id="slider">
            <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 3000 }} className="mySwiper">
                {
                    sliders &&
                    sliders.map((slider) => (
                        <SwiperSlide>
                            <div className="image">
                                <img width="100%" src={slider.photoURL} alt="" />
                                <div className="text">
                                    <h3 className="text-h3">{slider.title}</h3>
                                    <h1 className="text-h1">{slider.subTitle}</h1>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
