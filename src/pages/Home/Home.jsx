import Banner from "./Banner";
import CoffeeMenu from "./CoffeeMenu";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewCreations from "./NewCreations";
import NewRecipe from "./NewRecipe";
import Perfection from "./Perfection";
import PlayIntro from "./PlayIntro";


const Home = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <Navbar/>
            </div>
            <div className="px-2 md:px-0">
                <Banner/>
            </div>
            <div className="bg-[#fffaf2] md:h-[130px] mb-[130px] px-2 md:px-0">
                <PlayIntro/>
            </div>
            <div className="max-w-5xl mx-auto mb-8 md:mb-20 px-2 md:px-0">
                <Perfection/>
            </div>
            <div className="max-w-5xl mx-auto mb-8 md:mb-20 px-2 md:px-0">
                <CoffeeMenu/>
            </div>
            <div className="bg-[#fffaf2] py-4 md:py-10 mb-8 md:mb-20 px-2 md:px-0">
                <NewRecipe/>
            </div>
            <div className="max-w-5xl mx-auto mb-8 md:mb-20 px-2 md:px-0">
                <NewCreations/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;