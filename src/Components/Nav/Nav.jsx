import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BsPersonCircle,
  BsGlobeAmericas,
  BsTelephone,
  BsHeart,
  BsCart2,
} from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const categories = [
    ["Smartphone", "📱"],
    ["Laptop", "💻"],
    ["Camera", "📷"],
    ["Headphones", "🎧"],
    ["PC Gaming", "🎮"],
    ["Tablets", "📲"],
    ["Television", "📺"],
  ];

  return (
    <nav className="w-full flex flex-col items-center justify-center relative">
      {/* Top Bar */}
      <div className="top_nav w-full flex items-center justify-between bg-black text-white px-[8%] lg:px-[12%] py-3 text-sm">
        <div className="flex w-1/2 gap-5 items-center">
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-yellow-600">
              English <span className="ml-1">▼</span>
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50">
              <li>Francais</li>
              <li>Deutsch</li>
            </ul>
          </div>

          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-yellow-600">
              USD <span className="ml-1">▼</span>
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50">
              <li>USD</li>
              <li>EUR</li>
            </ul>
          </div>

          <p className="hide">Free shipping On All Orders over $100</p>
        </div>

        <ul className="flex gap-5 w-1/2 justify-end items-center">
          <li className="text-yellow-400 flex items-center gap-1">
            <a href="#">Flash Sale</a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-yellow-400 transition flex items-center gap-1"
            >
              <BsPersonCircle />
              Account Login
            </a>
          </li>

          <li>
            <Link
              to=""
              className="hover:text-yellow-400 transition flex items-center gap-1"
            >
              <BsGlobeAmericas />
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Middle Nav */}
      <div className="middle_nav w-full flex justify-between items-center px-[5%] lg:px-[12%] py-6 gap-10">
        <div className="w-1/5">
          <Link to="/">
            <h2 className="text-5xl font-bricolage text-black font-bold">
              Tron<span className="text-yellow-500">Mart</span>
            </h2>
          </Link>
        </div>

        <div className="product_search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden">
          <select className="bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none">
            <option>All Categories</option>
            <option>Camera</option>
            <option>Accessories</option>
            <option>Camera & Lenses</option>
            <option>Drones</option>
            <option>Security Cameras</option>
            <option>Games</option>
          </select>

          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-3 py-2 outline-none font-medium bg-gray-100"
          />

          <button className="cursor-pointer bg-yellow-500 text-white px-5 font-black uppercase h-full">
            Search
          </button>
        </div>

        <div className="get_help flex justify-end items-center gap-5 w-1/3">
          <div className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <BsTelephone />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">Need Help?</span>
              <span className="text-yellow-600 font-bold">+08 9229 8228</span>
            </div>
          </div>

          <Link to="/wishlist" className="flex items-center gap-2">
            <span className="text-3xl text-gray-500">
              <BsHeart />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">My</span>
              <span className="text-yellow-600 font-bold">Wishlist</span>
            </div>
          </Link>

          <Link to="/cart" className="flex items-center gap-2">
            <span className="text-3xl text-gray-500">
              <BsCart2 />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">My</span>
              <span className="text-yellow-600 font-bold">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`w-full px-[5%] lg:px-[12%] py-6 flex items-center justify-between gap-6 transition-all duration-500 ${
          menuOpen ? "h-auto" : ""
        }`}
      >
        <div className="relative w-1/5 hide">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <CiMenuBurger />
              </span>
              <span className="font-bold">Shop Categories</span>
            </div>
          </div>
          {open && (
            <ul
              className={`absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-full z-40 transition-all duration-300`}
            >
              {categories.map(([label, icon], i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 border-b last:border-none hover:bg-gray-100"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </ul>
          )}
        </div>
        <ul className="nav_menu flex gap-10 w-2/5 font-bold">
          <li><Link to='/' className="hover:text-yellow-500 text-xl transition">Home</Link></li>
          <li><Link to='/about' className="hover:text-yellow-500 text-xl transition">About</Link></li>
          <li><Link to='/shop' className="hover:text-yellow-500 text-xl transition">Shop</Link></li>
          <li><Link to='/blog' className="hover:text-yellow-500 text-xl transition">Blog</Link></li>
          <li><Link to='/faq' className="hover:text-yellow-500 text-xl transition">Faq,s</Link></li>
          <li><Link to='/contact' className="hover:text-yellow-500 text-xl transition">Contact</Link></li>
        </ul>
        <Link to='/wishlist' className="flex items-center gap-3 hide">
          <span className="text-2xl text-gray-600">
            <BsHeart />
          </span>
          <div className="flex items-center gap-2"> 
            <span className="text-sm font-bold">Today,s Deal</span>
            <span className="bg-red-600 text-white text-xs px-2 pt-1 rounded-sm uppercase relative">hot</span>
          </div>
        </Link> 
        {menuOpen && (
          <span onClick={toggleMenu} className="text-2xl absolute top-4 right-4 cursor-pointer">
            <CiMenuBurger />
          </span>
        )}
      </div>
    </nav>
  );
};
export default Nav;
// //        <div className={`absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-full z-40 transition-all duration-300`}></div>
