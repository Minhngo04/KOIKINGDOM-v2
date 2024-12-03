import React from "react";
import img_koitour from "../Picture/koi-farm.jpg";
import img_koifish from "../Picture/Kohaku.jpg";
import img_farm from "../Picture/FarmImage/4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core CSS
import 'swiper/css/autoplay'; // Autoplay CSS
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./HomePage.scss";
import SwiperSlideFunc from './SwiperSlide';

const HomePage = () => {
    let images_tour = [img_koitour, img_koitour, img_koitour, img_koitour, img_koitour, img_koitour, img_koitour, img_koitour];
    let images_koifish = [img_koifish, img_koifish, img_koifish, img_koifish, img_koifish, img_koifish, img_koifish, img_koifish];
    let text_tour = "Best Tour Available seller";
    let text_koifish = "Best KOI seller";

    return (
        <div className="homepage">
            <div className="introduce_1">
                <div className="information">
                    <div>- Explore the world of Koi with our exclusive farm tours.</div>
                    <div>- Experience Japan's top Koi farms, learn from experts, and see stunning fish up close.</div>
                    <div>- Whether you're a Koi enthusiast or new to the hobby, our tours offer an unforgettable glimpse into Koi culture.</div>
                </div>
                <div>
                    <img src={img_farm} alt="Koi Farm Tour" />
                </div>
            </div>

            <SwiperSlideFunc text={text_tour} images={images_tour} slidesPerView={3} autoplayDelay={2500} />
            <SwiperSlideFunc text={text_koifish} images={images_koifish} slidesPerView={3} autoplayDelay={2500} />
        </div>
    );
};

export default HomePage;
