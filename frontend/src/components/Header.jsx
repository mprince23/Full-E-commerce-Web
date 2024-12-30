import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import { IoMdAdd } from "react-icons/io";

const Header = ({ setShowLogin }) => {
  const { getTotalCartItems, token, setToken, userData } = useContext(ShopContext);
  const [menuOpened, setMenuOpend] = useState(false);
  const [header, setHeader] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpend(!menuOpened);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setHeader(true) : setHeader(false);
    });

    // remove eventlistener

    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  console.log("user",userData);
  

  return (
    <header
      className={`${header ? "!p-3 bg-white shadow-sm" : ""
        } fixed w-full mx-auto top-0 left-0 right-0 py-4 z-30 transition-all max-padd-container flexBetween`}
    >
      {/* logo */}

      <Link to={"/"}>
        {/* <img src={logo} alt="logo" height={177} width={177} /> */}
        <h1 className="text-xl sm:text-3xl font-extrabold">Logo</h1>
      </Link>

      <div className="flexBetween gap-x-20">
        {/* navbar Desktop */}

        <Navbar
          containerstyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />

        {/* navbar mobile */}

        <Navbar
          containerstyles={`${menuOpened
            ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
            : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
            }`}
        />

        <div className="flexBetween gap-x-3 sm:gap-x-8">
          {/* buttons */}

          <Link to={"/cart"} className="flex relative">
            <GiShoppingBag className="text-[22px] text-white bg-secondary h-9 w-9 p-2 rounded-xl" />

            <span className="bg-white text-sm absolute -top-2 -right-2 flexCenter w-5 h-5 rounded-full shadow-md">
              {getTotalCartItems()}
            </span>
          </Link>

          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="btn-outline rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="group relative">
              <FaCircleUser className="text-2xl" />
              <ul className="bg-primary shadow-sm p-3 w-36 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">

                <li
                  className="flex gap-x-2 cursor-pointer"
                >
                  <IoMdAdd className="text-[19px]" />
                  <p>Add Product</p>
                </li>
                <hr className="my-2" />
                <li
                  onClick={() => navigate("/myorders")}
                  className="flex gap-x-2 cursor-pointer"
                >
                  <FiPackage className="text-[19px]" />
                  <p>Orders</p>
                </li>
                <hr className="my-2" />
                <li
                  onClick={logOut}
                  className="flex gap-x-2 cursor-pointer"
                >
                  <TbLogout className="text-[19px]" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}

          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
