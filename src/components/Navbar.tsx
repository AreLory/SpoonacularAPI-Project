import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";

import Input from "./Input";

import type { IInput } from "../types/IInput";

export default function Navbar({value, onChange}:IInput) {


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
            Home
          </Link>
        </div>

        <Input onChange={onChange} value={value}/>
      </div>

      {/* Right */}
      <div className=" flex-1 flex justify-end align-middle">
        <IoIosMenu className="size-12 text-quaternary hover:scale-115 transition mr-2 mt-2"/>
      </div>
    </nav>
  );
}
