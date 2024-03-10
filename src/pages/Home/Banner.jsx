
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BannerSwiper from "../../components/BannerSwiper";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} loop={Infinity}  className="mySwiper">
        <SwiperSlide>
          <BannerSwiper imgSrc={"/src/assets/Coffee_1.png"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={"/src/assets/Coffee_2.png"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={"/src/assets/Coffee_3.png"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={"/src/assets/Coffee_4.png"}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSwiper imgSrc={"/src/assets/Coffee_5.png"}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
