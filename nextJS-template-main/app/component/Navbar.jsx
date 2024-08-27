"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'


const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Services",
    path: "#Services",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=" mx-auto max-w-[1720px]  w-full top-0 left-0 right-0 z-10 bg-opacity-90 ">
      <div className="flex container lg:py-4 flex-wrap items-start justify-between mx-auto pt-[40px] custom-padding">
        <Link
          href={"/"}
          className="md:pt-[15px] md:pb-[44px] hidden md:block"
        >
          <Image src="/img/logo.png" alt="Logo" width={253} height={174}/>
        </Link>

        {/* mobile responsive */}
        <div className="mobile-menu block md:hidden py-1">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-700 text-slate-700 hover:text-[#1F1F1F] hover:border-[#000]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-700 text-slate-700 hover:text-[#1F1F1F] hover:border-[#000]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
         {/* Desktop */}
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex  justify-between items-center w-full max-w-[567px]  md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
