/* eslint-disable react/prop-types */

const MenuCards = ({ menuImg, menuTitle, dolorBg, dolorText, BRColor }) => {
  return (
    <div className="grid grid-cols-9 items-center gap-[6px] p-2 border-2 rounded-md">
      <div>
        <img
          className="h-[50px] w-[50px] rounded-full border border-dashed p-1 border-[#86371C]"
          src={menuImg}
          alt=""
        />
      </div>
      <div className="col-span-5">
        <h1 className="text-xl font-semibold">{menuTitle}</h1>
        <p className="text-xs">
          There are many variations of passages Lorem <br /> Ipsum form
        </p>
      </div>
      <div className="text-2xl col-span-2 text-[#d1d1d1]">
        .....................
      </div>
      <div className="mt-[7px] flex justify-center">
        <span
          className={`bg-[${dolorBg}] rounded-full p-1 py-[5px] text-[${dolorText}]  font-medium text-xs  text-center border-dashed border border-[${BRColor}] `}
        >
          $10
        </span>
      </div>
    </div>
  );
};

export default MenuCards;
