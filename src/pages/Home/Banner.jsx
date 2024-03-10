
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BannerSwiper from "../../components/BannerSwiper";
import coffee1 from "/src/assets/Coffee_1.png";
import coffee2 from "/src/assets/Coffee_2.png";
import coffee3 from "/src/assets/Coffee_3.png";
import coffee4 from "/src/assets/Coffee_4.png";
import coffee5 from "/src/assets/Coffee_5.png";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} loop={Infinity}  className="mySwiper">
        <SwiperSlide>
          <BannerSwiper imgSrc={coffee1}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={coffee2}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={coffee3}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={coffee4}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={coffee5}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
