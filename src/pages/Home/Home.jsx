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
            <div>
                <Banner/>
            </div>
            <div className="bg-[#fffaf2] h-[130px] mb-[130px]">
                <PlayIntro/>
            </div>
            <div className="max-w-5xl mx-auto mb-20">
                <Perfection/>
            </div>
            <div className="max-w-5xl mx-auto mb-20">
                <CoffeeMenu/>
            </div>
            <div className="bg-[#fffaf2] py-10 mb-20">
                <NewRecipe/>
            </div>
            <div className="max-w-5xl mx-auto mb-20">
                <NewCreations/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;