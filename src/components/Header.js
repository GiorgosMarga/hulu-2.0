import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly items-center max-w-2xl">
        <HeaderItem title={"Home"} Icon={HomeIcon} />
        <HeaderItem title={"verified"} Icon={CheckBadgeIcon} />
        <HeaderItem title={"trending"} Icon={BoltIcon} />
        <HeaderItem title={"search"} Icon={MagnifyingGlassIcon} />
        <HeaderItem title={"collection"} Icon={RectangleStackIcon} />
        <HeaderItem title={"account"} Icon={UserIcon} />
      </div>
      <img
        className="object-contain w-[200px] h-[100px]"
        src="https://links.papareact.com/ua6"
        alt="logo"
      />
    </header>
  );
};

export default Header;
