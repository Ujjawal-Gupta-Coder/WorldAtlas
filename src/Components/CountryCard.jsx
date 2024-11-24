import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { Link } from "react-router-dom";
const CountryCard = ({ flag, name, population, region, capital }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <Link
      to={`/${name}`}
      className={
        dark
          ? "w-[270px] h-fit min-h-[400px] pb-4 bg-slate-700 text-white rounded-xl overflow-hidden cursor-pointer font-briliant shadow-custom animation-custom"
          : "w-[270px] h-fit min-h-[400px] pb-4 bg-gray-50 text-black rounded-xl overflow-hidden cursor-pointer font-briliant shadow-custom animation-custom"
      }
    >
      <img
        src={flag}
        alt="Flag"
        className="object-cover w-full min-h-[150px] max-h-[250px]"
      />
      <div className="font-bold text-3xl p-4">{name ? name : "Undefined"}</div>
      <div className="text-lg px-4">
        {" "}
        <span className="font-bold">Population: </span>{" "}
        {population ? population.toLocaleString("en-IN") : "Undefined"}{" "}
      </div>
      <div className="text-lg px-4">
        <span className="font-bold">Region: </span>{" "}
        {region ? region : "Undefined"}
      </div>
      <div className="text-lg px-4">
        <span className="font-bold">Capital:</span>{" "}
        {capital ? capital : "Undefined"}
      </div>
    </Link>
  );
};

export default CountryCard;
