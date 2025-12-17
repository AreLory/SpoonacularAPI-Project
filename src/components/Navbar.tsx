import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { IoIosMenu, IoIosHome } from "react-icons/io";

// ** Interfaces
import type { INavbarProps } from "../types/IFilters";
// ** Component
import Input from "./Input";
import SideBar from "./SideBar";

export default function Navbar({
  query,
  onInputChange,
  filters,
  onFilterChange,
}: INavbarProps) {

  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  // ** Open and close side bar functions
  const handleIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

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
    <nav className="w-full flex sticky top-0 h-[70px] bg-primary z-50 items-center justify-between">
      {/* Left */}
      <div className="  flex-1">Logo</div>

      {/* Center */}
      <div className=" w-full justify-around flex pt-3">
        <div className="hidden md:block">
          <Link
            to={"/"}
            className="text-2xl font-extrabold text-quaternary text-border hover:text-primary hover-effect"
          >
            <IoIosHome /> Home
          </Link>
        </div>

        <Input onChange={onInputChange} query={query} />
      </div>

      {/* Right */}
      <div className=" flex-1 flex justify-end align-middle">
        <button onClick={handleIsOpen}>
          <IoIosMenu className="size-12 text-quaternary hover:scale-115 transition mr-2 mt-2" />
        </button>
        {isOpen && (
          <SideBar
            filters={filters}
            onFilterChange={onFilterChange}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
