import { useState } from "react";

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
        <div role="tablist" className="tabs tabs-lifted">
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
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Creation-1.jpeg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-8">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Creation-2.jpeg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Creation-3.jpeg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Creation-4.jpeg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Creation-5.jpeg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Burger-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Burger-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Burger-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Burger-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-2">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Burger-5.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Drinks-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Drinks-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Drinks-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Drinks-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-7">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Drinks-5.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 4 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-7">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Pizza-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Pizza-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Pizza-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Pizza-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Pizza-5.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 5 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Dinner-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-8">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Dinner-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Dinner-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Dinner-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Dinner-5.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 6 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-9">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Lunch-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Lunch-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Lunch-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Lunch-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Lunch-5.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 7 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-6">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Cookies-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Cookies-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Cookies-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-7">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Cookies-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Cookies-5.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {activeTab === 8 && (
          <div className="grid grid-cols-12 gap-3">
            <div className="rounded-lg col-span-5">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Bakery-1.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Bakery-2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-4">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Bakery-3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-3">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Bakery-4.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg col-span-9">
              <img
                className="rounded-lg h-[250px] w-full"
                src="/src/assets/Bakery-5.jpg"
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
