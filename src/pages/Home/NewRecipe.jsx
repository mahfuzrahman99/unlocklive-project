import "../../components/CSS/recipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import RecipeDivOverly from "../../components/RecipeDivOverly";

const NewRecipe = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 ">
      <div className="col-span-1">
        <p className="flex gap-2 items-center font-semibold">
          <span
            className={`bg-gradient-to-r from-[#fff] to-[#86371C] h-[3px] w-10 rounded-lg`}
          ></span>
          <span className="text-[#86371C] text-xs">New Recipes</span>
        </p>
        <p className="text-3xl font-bold my-4">Taste Our New Recipe</p>
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
      </div>
      <div className="col-span-2 ml-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          loop={Infinity}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="Swiper  group relative">
            <img
              className="h-full w-full image image"
              src="/src/assets/Burger-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Drinks-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Pizza-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Dinner-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Lunch-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Cookies-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper  group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Bakery-1.jpg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
          <SwiperSlide className="Swiper group relative">
            <img
              className="h-full w-full image"
              src="/src/assets/Creation-5.jpeg"
              alt=""
            />
            <RecipeDivOverly />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewRecipe;
