
import MenuCards from "../../components/MenuCards";



const CoffeeMenu = () => {
    return (
        <div>
            <div>
                <h1 className="flex justify-center items-center">
                    <span className={`bg-gradient-to-r from-[#fff] to-[#86371C] h-1 w-10 rounded-lg`}></span>
                    <span className="mx-7 text-xs text-[#86371C]">Coffee Menu</span>
                    <span className={`bg-gradient-to-r from-[#86371C] to-[#fff] h-1 w-10 rounded-lg`}></span>
                </h1>
                <p className="text-2xl font-bold text-center mt-3">Unlocklive Coffee Menu</p>
                <div className="grid grid-cols-2 gap-3 my-6">
                    <MenuCards menuImg="/src/assets/Coffee-menu-1.jpeg" menuTitle="Double Espresso x2" dolorBg="#86371C" dolorText="#fff" BRColor="#E9E7E6"/>
                    <MenuCards menuImg="/src/assets/Coffee-menu-2.jpeg" menuTitle="Double Espresso x2" dolorBg="#E9E7E6" BRColor="#86371C"/>
                    <MenuCards menuImg="/src/assets/Coffee-menu-3.jpeg" menuTitle="Double Espresso x2" dolorBg="#E9E7E6" BRColor="#86371C"/>
                    <MenuCards menuImg="/src/assets/Coffee-menu-4.jpeg" menuTitle="Double Espresso x2" dolorBg="#E9E7E6" BRColor="#86371C"/>
                </div>
                <div className="flex justify-center mb-12">
                    <button className="text-xs border text-[#86371C] font-semibold border-[#86371C] p-2 rounded-md">View All Menu</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeMenu;