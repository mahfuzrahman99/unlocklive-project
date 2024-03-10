/* eslint-disable react/prop-types */
import '../components/CSS/banner.css';

const BannerSwiper = ({imgSrc}) => {
    return (
        <div className=" border-t-2">
            <div className="flex gap-6 items-center ml-20 border-l-2 pb-16">
              <div className="max-w-[550px] space-y-4 pl-20">
                <p className="text-sm font-bold">WELCOME TO OUR</p>
                <p className="text-[50px] font-bold">Unlocklive</p>
                <p className="text-2xl font-bold">
                  Elevating Your Coffee Experience
                </p>
                <p className="text-xs font-medium">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a refined and memorable journey. At
                  Epicurean, we take pride in curating an exceptional coffee
                  experience that transcends the ordinary.
                </p>
                <div className="flex gap-5 items-center py-6">
                  <div>
                    <button className="text-white bg-[#86371c] p-2 rounded-md text-[8px] font-bold">
                      EXPLORE OUR MENU
                    </button>
                  </div>
                  <div className="">
                    <div className="relative">
                      <div className="absolute left-0">
                        <img
                          className="h-10 w-10 border-2 border-[#D9D8D3] rounded-full"
                          src="/src/assets/banner-coffee-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute left-8">
                        <img
                          className="h-10 w-10 border-2 border-[#D9D8D3] rounded-full"
                          src="/src/assets/banner-coffee-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute left-16">
                        <img
                          className="h-10 w-10 border-2 border-[#D9D8D3] rounded-full"
                          src="/src/assets/banner-coffee-3.jpg"
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
              <div>
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