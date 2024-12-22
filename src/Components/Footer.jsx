import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { Link } from "react-router-dom";

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
      🚀Powered by creativity. ⚙️ Made with ❤️ by{" "}
      <Link to='https://www.linkedin.com/in/ujjawal-gupta-dev' target="_blank" className="text-sky-500  ml-1 font-bold hover:text-pink-500">
        Ujjawal Gupta
      </Link>
      .
    </div>
  );
};

export default Footer;
