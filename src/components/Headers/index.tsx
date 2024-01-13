import React, { FC } from "react";
import Link from "next/link";
import { HeaderNavs } from "./constants";
import HeaderNav from "../Navs/HeaderNav";

interface HeaderProps {}


const Header: FC<HeaderProps> = () => {

    console.log("HeaderNavs", HeaderNavs);
    const navItems = HeaderNavs || [];

  return (
    <header className="w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] relative">
      <div className="w-full max-w-screen-xl mx-5 md:mx-20 flex items-center justify-between">
        
        <nav className="gap-14 hidden lg:flex">
          {navItems.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
