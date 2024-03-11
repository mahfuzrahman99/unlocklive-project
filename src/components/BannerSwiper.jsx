/* eslint-disable react/prop-types */
import '../components/CSS/banner.css';
import bannerCoffee1 from "../assets/banner-coffee-1.jpg"
import bannerCoffee2 from "../assets/banner-coffee-2.jpg"
import bannerCoffee3 from "../assets/banner-coffee-3.jpg"

const BannerSwiper = ({imgSrc}) => {
    return (
        <div className=" border-t-2">
            <div className="md:flex gap-6 items-center ml-6 md:ml-20 border-l-2 pb-4 md:pb-16">
              <div className="max-w-[550px] space-y-4 pl-6 md:pl-20">
                <p className="text-[10px] md:text-sm font-bold">WELCOME TO OUR</p>
                <p className="text-xl md:text-[50px] font-bold">Unlocklive</p>
                <p className="text-lg md:text-2xl font-bold">
                  Elevating Your Coffee Experience
                </p>
                <p className="text-xs font-medium">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a refined and memorable journey. At
                  Epicurean, we take pride in curating an exceptional coffee
                  experience that transcends the ordinary.
                </p>
                <div className="flex gap-8 items-center py-6">
                  <div>
                    <button className="text-white bg-[#86371c] p-2 rounded-md text-[8px] font-bold">
                      EXPLORE OUR MENU
                    </button>
                  </div>
                  <div className=" flex justify-center">
                    <div className="flex items-center">
                      <div className=" -translate-x-3">
                        <img
                          className="h-10 w-10 border-2 border-[#D9D8D3] " 
                          src={bannerCoffee1}
                          alt=""
                        />
                      </div>
                      <div className="-translate-x-5">
                        <img
                          className="h-10 w-10 border-2 border-[#D9D8D3] " 
                          src={bannerCoffee2}
                          alt=""
                        />
                      </div>
                      <div className="-translate-x-8">
                        <img
                          className="h-10 w-10 border-2 border-[#D9D8D3] " 
                          src={bannerCoffee3}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="">
                      <p className="text-lg font-bold">1200+</p>
                      <p className="text-xs">Tasty Variant Coffee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden lg:block'>
                <img
                  className="h-[450px] mr-10 mt-8"
                  src={imgSrc}
                  alt=""
                />
              </div>
            </div>
          </div>
    );
};

export default BannerSwiper;