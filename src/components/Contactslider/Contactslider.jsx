import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './contactslider.scss'

export default function Contactslider() {
    return (
        <div id='contactslider'>
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand6.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="photo">
                        <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/brand6.png" alt="" />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>

    );
};