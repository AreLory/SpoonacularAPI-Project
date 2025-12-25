import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

// ** Interfaces
import type { INavbarProps } from "../types/IFilters";
// ** Component
import Input from "./Input";
import SideBar from "./SideBar";

import { IoIosMenu } from "react-icons/io";
import logo from '../assets/images/Veggie-Vibes-arancione-Logo.png'

export default function Navbar({
  query,
  onInputChange,
  filters,
  onFilterChange,
}: INavbarProps) {

  // ** Sidebar state
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  // ** Close Sidebar clicking outside
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full flex sticky top-0 md:h-[70px] bg-primary z-50 items-center justify-between flex-row md:flex-nowrap px-2 sm:px-4 gap-2 md:gap-0">
      <a className="w-32 sm:w-40 md:w-[25vw] relative md:top-2"
      href="/">
        <img className="w-full h-auto"
        src={logo} 
        alt="veggie-vibes-logo" />
      </a>
      <div className="flex-1 md:flex-initial md:w-[50vw] flex justify-center px-1 sm:px-2">
        <Input onChange={onInputChange} 
        value={query} 
        placeholder="Search"
        bgColor="#101517"/>
      </div>

      <div className="hidden md:flex gap-4 md:w-[25vw] justify-end pr-4">
        <Link
          to={"/"}
          className="text-lg md:text-xl font-extrabold text-quaternary text-border hover:text-primary hover-effect"
        >
          Home
        </Link>
        <button
          onClick={handleIsOpen}
          className="text-lg md:text-xl font-extrabold text-quaternary text-border hover:text-primary hover-effect"
        >
          Filters
        </button>
      </div>
      <div className="flex md:hidden">
        <button onClick={handleIsOpen} className="p-2">
          <IoIosMenu className="size-8 sm:size-10 text-quaternary hover:scale-110 transition" />
        </button>
      </div>
      {isOpen && (
        <SideBar
          filters={filters}
          onFilterChange={onFilterChange}
          onClose={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
