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
          <span className="mx-7 text-xs text-[#86371C] font-lemonada">Coffee Menu</span>
          <span
            className={`bg-gradient-to-r from-[#86371C] to-[#fff] h-1 w-10 rounded-lg`}
          ></span>
        </h1>
        <p className="text-2xl font-bold text-center mt-3 font-bakilda">
          Unlocklive Coffee Menu
        </p>
        <div className="md:grid grid-cols-2 gap-3 my-6">
          <MenuCards
            menuImg={coffeeMenu1}
            menuTitle="Double Espresso x2"
            dolorBg={`#86371C`}
            dolorText="#fff"
            BRColor="#e9e7e6"
          />
          <MenuCards
            menuImg={coffeeMenu2}
            key={coffeeMenu2}
            menuTitle="Double Espresso x2"
            dolorBg="#e9e7e6"
            BRColor="#86371C"
          />
          <MenuCards
            menuImg={coffeeMenu3}
            key={coffeeMenu3}
            menuTitle="Double Espresso x2"
            dolorBg="#e9e7e6"
            BRColor="#86371C"
          />
          <MenuCards
            menuImg={coffeeMenu4}
            key={coffeeMenu4}
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
