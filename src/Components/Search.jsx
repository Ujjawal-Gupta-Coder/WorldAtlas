import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Search = ({ searchCountry, setsearchCountry }) => {
  const { dark } = useContext(ThemeContext);
  const handleSearch = (e) => {
    setsearchCountry(e.target.value);
  };
  return (
    <div
      className={
        dark
          ? "flex justify-center items-center rounded-lg bg-DarkCustom px-2  w-[95%] xs:w-[350px] h-[50px] relative"
          : "flex justify-center items-center rounded-lg bg-white px-2  w-[95%] xs:w-[350px] h-[50px] relative"
      }
    >
      <div
        className={
          dark
            ? "bg-DarkCustom h-full w-[20%] flex items-center justify-center text-white font-bold text-2xl rounded-l-lg"
            : "bg-white h-full w-[20%] flex items-center justify-center text-black font-bold text-2xl rounded-l-lg"
        }
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        type="text"
        className={
          dark
            ? "text-white outline-none rounded-r-lg h-full w-[95%] xs:w-[80%] bg-DarkCustom"
            : "text-black outline-none rounded-r-lg h-full w-[95%] xs:w-[80%] bg-white"
        }
        placeholder="Search for a Country ..."
        value={searchCountry}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
