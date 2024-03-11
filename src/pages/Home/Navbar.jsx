import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import navLogo from "../../assets/Navbar-Logo.png"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a className="flex items-center">
                <span>PAGES</span>{" "}
                <span className="text-lg">
                  <IoIosArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center">
                <span>MENU</span>{" "}
                <span className="text-lg">
                  <IoIosArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 text-xs font-bold">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a className="flex items-center">
                <span>PAGES</span>{" "}
                <span className="text-lg">
                  <IoIosArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center">
                <span>MENU</span>{" "}
                <span className="text-lg">
                  <IoIosArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <img src={navLogo} alt="" />
      </div>
      <div className="navbar-end flex gap-14">
        <div>
          <ul className="flex gap-3">
            <li className=" text-2xl">
              <IoIosSearch />
            </li>
            <li className="relative text-2xl">
              <span>
                <CiHeart />
              </span>
              <span className=" text-white bg-black px-[3px] rounded-full text-[10px] absolute -top-[3px] right-0 leading-3">
                5
              </span>
            </li>
            <li className="relative text-2xl">
              <span>
              <MdOutlineShoppingCart />
              </span>
              <span className=" text-white bg-black px-[3px] rounded-full text-[10px] absolute -top-[3px] right-0 leading-3">
                4
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white font-bold bg-black p-[3px] rounded-full"><CiUser /></span>
          <p className=" text-xs font-bold">SIGN IN</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
