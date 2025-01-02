import React, { useContext } from "react";
import logoImg from "../assets/images/EarthLogoImg.gif";
import { ThemeContext } from "../contexts/themeContext";
const Header = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    let value = !dark ? "dark" : "light";

    localStorage.setItem("mode", value);
    setDark(!dark);
  };

  return (
    <div
      className={
        dark
          ? "w-full h-[70px] bg-slate-900 text-white flex items-center justify-between"
          : "w-full h-[70px] bg-gray-200 text-black flex items-center justify-between"
      }
    >
      <div className="flex items-center justify-between w-[100%] md:w-[80%] mx-auto px-4 gap-x-2">
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Logo"
            className="h-[60px] w-[60px] rounded-full hidden sm:block"
          />
          <h2 className="font-briliant text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
            Know About The World Countries!!
          </h2>
        </div>

        <button
          className="flex items-center justify-center gap-1 sm:gap-3"
          onClick={handleToggleTheme}
        >
          
          <div
            className={
              dark
                ? "border-2 border-white p-1 rounded-lg bg-zinc-800 hover:bg-zinc-500"
                : "border-2 border-black p-1 rounded-lg bg-gray-200 hover:bg-zinc-300"
            }
          >
            {!dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </div>
          <p className="font-semibold text-sm sm:text-md">
            {dark ? "Light Mode" : "Dark Mode"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
