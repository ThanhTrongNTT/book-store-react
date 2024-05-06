import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { link: "Home", path: "/", isActive: true },
    { link: "Search", path: "/search", isActive: false },
    { link: "Genres", path: "/genre", isActive: false },
  ]);
  navItems.forEach((item) => {
    if (window.location.pathname === item.path) {
      item.isActive = true;
    } else {
      item.isActive = false;
    }
  });

  const navigate = useNavigate();

  const handleNavItemClick = (index: number) => {
    const updatedNavItems = navItems.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });
    setNavItems(updatedNavItems);
    navigate(updatedNavItems[index].path);
  };

  return (
    <>
      <nav className="font-grotesk flex py-5 w-[70%]">
        <h1 className="text-2xl font-bold justify-items-start text-gray-700 cursor-pointer">
          <a href="/">Book Store</a>
        </h1>
        <ul className="flex gap-10 text-base mx-auto">
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
      </nav>
    </>
  );
};

export default Navbar;
