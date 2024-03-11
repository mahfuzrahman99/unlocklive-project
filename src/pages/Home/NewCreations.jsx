import { useState } from "react";
import creation1 from "../../assets/Creation-1.jpeg"
import creation2 from "../../assets/Creation-2.jpeg"
import creation3 from "../../assets/Creation-3.jpeg"
import creation4 from "../../assets/Creation-4.jpeg"
import creation5 from "../../assets/Creation-5.jpeg"

import burger1 from "../../assets/Burger-1.jpg"
import burger2 from "../../assets/Burger-2.jpg"
import burger3 from "../../assets/Burger-3.jpg"
import burger4 from "../../assets/Burger-4.jpg"
import burger5 from "../../assets/Burger-5.jpg"

import drink1 from "../../assets/Drinks-1.jpg"
import drink2 from "../../assets/Drinks-2.jpg"
import drink3 from "../../assets/Drinks-3.jpg"
import drink4 from "../../assets/Drinks-4.jpg"
import drink5 from "../../assets/Drinks-5.jpg"

import pizza1 from "../../assets/Pizza-1.jpg"
import pizza2 from "../../assets/Pizza-2.jpg"
import pizza3 from "../../assets/Pizza-3.jpg"
import pizza4 from "../../assets/Pizza-4.jpg"
import pizza5 from "../../assets/Pizza-5.jpg"

import dinner1 from "../../assets/Dinner-1.jpg"
import dinner2 from "../../assets/Dinner-2.jpg"
import dinner3 from "../../assets/Dinner-3.jpg"
import dinner4 from "../../assets/Dinner-4.jpg"
import dinner5 from "../../assets/Dinner-5.jpg"

import lunch1 from "../../assets/Lunch-1.jpg"
import lunch2 from "../../assets/Lunch-2.jpg"
import lunch3 from "../../assets/Lunch-3.jpg"
import lunch4 from "../../assets/Lunch-4.jpg"
import lunch5 from "../../assets/Lunch-5.jpg"

import cookies1 from "../../assets/Cookies-1.jpg"
import cookies2 from "../../assets/Cookies-2.jpg"
import cookies3 from "../../assets/Cookies-3.jpg"
import cookies4 from "../../assets/Cookies-4.jpg"
import cookies5 from "../../assets/Cookies-5.jpg"

import bakery1 from "../../assets/Bakery-1.jpg"
import bakery2 from "../../assets/Bakery-2.jpg"
import bakery3 from "../../assets/Bakery-3.jpg"
import bakery4 from "../../assets/Bakery-4.jpg"
import bakery5 from "../../assets/Bakery-5.jpg"

const NewCreations = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="text-center">
      <div>
        <div>
          <p className="text-xs text-[#86371C] mb-1">Showcase</p>
          <span className="flex justify-center">
            <span className="bg-gradient-to-r from-[#fff] via-[#86371C] to-[#fff] h-[2px] w-20 rounded-lg"></span>
          </span>
          <h1 className="text-3xl font-bold my-3">Our Chefs New Creations</h1>
          <p className="text-xs">
            Behold the extraordinary creations born from the synergy of our
            users&apos; ingenuity <br /> and the transformation power of AI, a
            testament to boundless innovation.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div role="tablist" className="tabs tabs-lifted overflow-x-auto "  style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflow: "-moz-scrollbars-none" }}>
          <a
            role="tab"
            className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            All
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Burger
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Drinks
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 4 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(4)}
          >
            Pizza
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 5 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(5)}
          >
            Dinner
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 6 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(6)}
          >
            Lunch
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 7 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(7)}
          >
            Cookies
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 8 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(8)}
          >
            Bakery
          </a>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={creation1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-8">
              <img
                className="rounded-lg h-[250px] w-full"
                src={creation2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={creation3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={creation4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={creation5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src={burger1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src={burger2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={burger3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src={burger4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-2">
              <img
                className="rounded-lg h-[250px] w-full"
                src={burger5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={drink1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src={drink2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={drink3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={drink4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-7">
              <img
                className="rounded-lg h-[250px] w-full"
                src={drink5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-7">
              <img
                className="rounded-lg h-[250px] w-full"
                src={pizza1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={pizza2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={pizza3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={pizza4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={pizza5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 5 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={dinner1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-8">
              <img
                className="rounded-lg h-[250px] w-full"
                src={dinner2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={dinner3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={dinner4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={dinner5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 6 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-9">
              <img
                className="rounded-lg h-[250px] w-full"
                src={lunch1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={lunch2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={lunch3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={lunch4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={lunch5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 7 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src={cookies1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={cookies2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={cookies3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-7">
              <img
                className="rounded-lg h-[250px] w-full"
                src={cookies4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={cookies5}
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 8 && (
          <div className="md:grid grid-cols-12 gap-3 space-y-2">
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src={bakery1}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={bakery2}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src={bakery3}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src={bakery4}
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-9">
              <img
                className="rounded-lg h-[250px] w-full"
                src={bakery5}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCreations;
