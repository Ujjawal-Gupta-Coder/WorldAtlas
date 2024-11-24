import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Footer = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={
        dark
          ? "w-full flex items-center justify-center py-2 text-[10px] bg-slate-900 text-white font-briliant"
          : "w-full flex items-center justify-center py-2 text-[10px] bg-gray-200 text-black font-briliant"
      }
    >
      ©️ 2024 All Rights Reserved. ⚙️Made with ❤️ by{" "}
      <span className="text-sky-500  ml-1 font-bold hover:text-pink-500">
        Ujjawal Gupta
      </span>
      .
    </div>
  );
};

export default Footer;
