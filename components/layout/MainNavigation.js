import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavigation from "./MobileNavigation";
import Portal from "../UI/Portal";
import handleWhatsAppClick from "@/helpers/whatsapp";


const linkContent = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "" },
  { title: "Course", link: "" },
  { title: "Pricing", link: "" },
  { title: "Blog", link: "" },
];

let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full h-20 flex items-center bg-blue-0 justify-between  px-5 md:px-10">
     
       <Portal isOpen={isOpen} onClick={toggleDrawer}>
        <div
          className={`fixed inset-y-0 z-50 -left-72 shadow-lg lg:hidden transform  ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation /> 
        </div>
      </Portal>
       
        <h1 className="text-xl font-medium text-white">EduLab</h1>
    

      <nav className="hidden font-medium h-full lg:flex items-center text-xl space-x-14">
          {linkContent.map((content, index) => {
            const textColor = activeLink === content.link ? "text-white" : "text-gray-0";
            return <Link
               onClick={handleWhatsAppClick}
              key={index}
              className={textColor}
              href={content.link}
            >
              {content.title}
            </Link>
          })}{" "}
        
      <div className="flex font-semibold py-3 border border-[1px] border-green-0 rounded-md px-4 border text-lg text-primaryshade hidden lg:flex">
        {" "}
        
        <select
          // onClick={handleWhatsAppClick}
          href={""}
          className="text-green-0 pr-1 border-none outline-none bg-transparent"
        >
          <option>Sign Up</option>
        </select>
      </div>
      </nav>
      <button
        className={`${navAnimationClass} z-50 block hamburger lg:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </header>
  );
};

export default MainNavigation;
