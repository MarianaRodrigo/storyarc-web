import React from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <div className="flex mt-3 px-4 items-center">
      <Logo />
      <Search />
    </div>
  );
}
