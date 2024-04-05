import React, { useState } from "react";
import Button from "../Button/Button";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { link: "Home", path: "/", isActive: true },
    { link: "About", path: "/", isActive: false },
    { link: "Shop", path: "/", isActive: false },
    { link: "Contact", path: "/", isActive: false },
    { link: "Login", path: "/", isActive: false },
  ]);

  const handleNavItemClick = (index: number) => {
    const updatedNavItems = navItems.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });
    setNavItems(updatedNavItems);
  };

  return (
    <>
      <div className="font-grotesk flex justify-between py-5 w-[70%]">
        <h1 className="text-2xl font-bold text-gray-700 cursor-pointer">
          Book Store
        </h1>
        <ul className="flex gap-10 text-base">
          {navItems.map((item, index) => (
            // <li className="block text-black text-base uppercase cursor-pointer hover:text-blue-600">
            <li
              key={index}
              className={`relative text-xl w-fit block cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:duration-300 after:origin-center ${item.isActive ? "after:scale-x-100" : "after:scale-x-0 after:hover:scale-x-100 after:transition"}`}
              onClick={() => handleNavItemClick(index)}
            >
              {item.link}
            </li>
          ))}
        </ul>
        <Button label="Login" icon={<FaUser />} />
      </div>
    </>
  );
};

export default Navbar;
