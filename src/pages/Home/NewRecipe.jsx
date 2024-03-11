import "../../components/CSS/recipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import RecipeDivOverly from "../../components/RecipeDivOverly";
import Recipe1 from "../../assets/Burger-1.jpg";
import Recipe2 from "../../assets/Drinks-1.jpg";
import Recipe3 from "../../assets/Pizza-1.jpg";
import Recipe4 from "../../assets/Dinner-1.jpg";
import Recipe5 from "../../assets/Lunch-1.jpg";
import Recipe6 from "../../assets/Cookies-1.jpg";
import Recipe7 from "../../assets/Bakery-1.jpg";
import Recipe8 from "../../assets/Creation-5.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const NewRecipe = () => {
  return (
    <div className="max-w-5xl mx-auto md:grid grid-cols-3 gap-3 ">
      <div className="col-span-1">
        <p className="flex gap-2 items-center font-semibold">
          <span
            className={`bg-gradient-to-r from-[#fff] to-[#86371C] h-[3px] w-10 rounded-lg`}
          ></span>
          <span className="text-[#86371C] text-xs">New Recipes</span>
        </p>
        <p className="text-xl md:text-3xl font-bold my-4">
          Taste Our New Recipe
        </p>
        <p className="text-xs">
          Malesuada cursus a tincidunt volutpat posuere lacinia. Congue <br />
          malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
          <br />
          porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus.
          <br />
          Scelerisque nibh elit malesuada sodales eget iaculis nunc erat.
          <br /> Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit
          <br /> ornare imperdiet viverra sit vel.
        </p>
        <p className="text-xs my-4">
          There are many variations of passages of Lorem Ipsum form any
          <br /> injected humour, or randomised words which don&apos;t look
          <br /> slightly believable.
        </p>
        <div className=" items-center gap-5 hidden md:flex">
          <p className="swiper-button-prev p-2 rounded-full border border-[#341914] text-[#341914] ">
            <FaArrowLeft />
          </p>
          <p className="swiper-button-next p-2 rounded-full border  border-[#341914] text-[#341914]">
            <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="col-span-2 md:ml-4 rounded-md">
        <Swiper
          spaceBetween={10}
          navigation={true}
          loop={Infinity}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper  rounded-md"
          breakpoints={{
            // When window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="Swiper  group relative">
            <img className="h-full w-full image image" src={Recipe1} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img className="h-full w-full image" src={Recipe2} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img className="h-full w-full image" src={Recipe3} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img className="h-full w-full image" src={Recipe4} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img className="h-full w-full image" src={Recipe5} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img className="h-full w-full image" src={Recipe6} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper  group relative">
            <img className="h-full w-full image" src={Recipe7} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img className="h-full w-full image" src={Recipe8} alt="" />
            <RecipeDivOverly />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewRecipe;
