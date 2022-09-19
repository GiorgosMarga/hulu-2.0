import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col group items-center w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 w-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 uppercase">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
