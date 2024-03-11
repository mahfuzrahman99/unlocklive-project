import MenuCards from "../../components/MenuCards";
import coffeeMenu1 from "../../assets/Coffee-menu-1.jpeg";
import coffeeMenu2 from "../../assets/Coffee-menu-2.jpeg";
import coffeeMenu3 from "../../assets/Coffee-menu-3.jpeg";
import coffeeMenu4 from "../../assets/Coffee-menu-4.jpeg";

const CoffeeMenu = () => {
  return (
    <div>
      <div>
        <h1 className="flex justify-center items-center">
          <span
            className={`bg-gradient-to-r from-[#fff] to-[#86371C] h-1 w-10 rounded-lg`}
          ></span>
          <span className="mx-7 text-xs text-[#86371C]">Coffee Menu</span>
          <span
            className={`bg-gradient-to-r from-[#86371C] to-[#fff] h-1 w-10 rounded-lg`}
          ></span>
        </h1>
        <p className="text-2xl font-bold text-center mt-3">
          Unlocklive Coffee Menu
        </p>
        <div className="md:grid grid-cols-2 gap-3 my-6">
          {/* <MenuCards menuImg={coffeeMenu1} menuTitle="Double Espresso x2" dolorBg={`#86371C`} dolorText="#fff" BRColor="#e9e7e6"/> */}
          <div className="grid grid-cols-9 items-center gap-[6px] p-2 border-2 rounded-md">
            <div>
              <img
                className="h-[30px] md:h-[50px] w-[40px] md:w-[50px] rounded-full border border-dashed p-1 border-[#86371C]"
                src={coffeeMenu1}
                alt=""
              />
            </div>
            <div className="col-span-5">
              <h1 className="text-md md:text-xl font-semibold">Double Espresso x2</h1>
              <p className="text-[9px] md:text-xs">
                There are many variations of passages Lorem <br /> Ipsum form
              </p>
            </div>
            <div className="text-2xl col-span-2 text-[#d1d1d1]">
              ...........<span className="hidden  md:inline">..........</span>
            </div>
            <div className="mt-[7px] flex justify-center">
              <span
                className={`bg-[#86371C] rounded-full p-1 py-[5px] text-[#fff]  font-medium text-xs  text-center border-dashed border border-[#e9e7e6] `}
              >
                $10
              </span>
            </div>
          </div>
          <MenuCards
            menuImg={coffeeMenu2}
            menuTitle="Double Espresso x2"
            dolorBg="#e9e7e6"
            BRColor="#86371C"
          />
          <MenuCards
            menuImg={coffeeMenu3}
            menuTitle="Double Espresso x2"
            dolorBg="#e9e7e6"
            BRColor="#86371C"
          />
          <MenuCards
            menuImg={coffeeMenu4}
            menuTitle="Double Espresso x2"
            dolorBg="#e9e7e6"
            BRColor="#86371C"
          />
        </div>
        <div className="flex justify-center mb-5 md:mb-12">
          <button className="text-xs border text-[#86371C] font-semibold border-[#86371C] p-2 rounded-md">
            View All Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMenu;
