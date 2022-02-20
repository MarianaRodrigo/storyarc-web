import React from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row mt-3 px-4 sm:items-center space-y-3 sm:space-y-0 sm:space-x-2 transition-all">
      <Logo />
      <Search />
    </div>
  );
}
