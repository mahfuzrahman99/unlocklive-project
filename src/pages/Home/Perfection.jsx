// import { TbArrowRightCircle } from "react-icons/tb";

import ArrowSymble from "../../components/ArrowSymble";

const Perfection = () => {
  return (
    <div className="flex gap-5 justify-between items-center">
      <div className="space-y-3">
        <div className="flex items-center gap-1 text-[#86371C]">
          <span className="text-xl">
            {/* <TbArrowRightCircle /> */}
            <span><ArrowSymble RColor="#fff" LColor="#86371C"/></span>
          </span>
          <p className=" text-xs">Why Choose Us</p>
        </div>
        <p className="text-3xl font-bold">
          Choosing Unlocklive, A Taste of <br /> Perfection
        </p>
        <p className="text-xs">
          Unlocklive takes pride in the art of roasting, transforming raw coffee
          beans into a <br /> symphony of aromatic notes and rich flavors.
        </p>
        <div className="flex gap-3 items-center text-center my-3">
          <div className="border-2 rounded-lg p-3 px-7">
            <h1 className="text-3xl font-bold">20+</h1>
            <p className=" text-xs">Years Experience</p>
          </div>
          <div className="border-2 rounded-lg p-3 px-7">
            <h1 className="text-3xl font-bold">100+</h1>
            <p className=" text-xs">Master Chefs</p>
          </div>
          <div className="border-2 rounded-lg p-3 px-7">
            <h1 className="text-3xl font-bold">30+</h1>
            <p className=" text-xs">Achievements</p>
          </div>
        </div>
        <p className="text-xs">
          Your choice to savor our coffee is an invitation to experience the
          epitome of craftsmanship, <br /> flavor, and dedication.
        </p>
        <div>
          <button className="text-xs border text-[#86371C] font-semibold border-[#86371C] p-2 rounded-md">
            Explore Our Menus
          </button>
        </div>
      </div>
      <div>
        <img
          className="h-[350px] w-[380px] rounded-md"
          src="/src/assets/choos-us.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Perfection;
