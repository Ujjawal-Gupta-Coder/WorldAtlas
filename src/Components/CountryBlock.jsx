import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/themeContext";
const CountryBlock = ({ countryData, borderContries }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="flex flex-col lg:flex-row px-4 py-4 gap-x-12 md:gap-y-8 justify-center items-center lg:h-[600px] w-[90%]">
      <img
        src={countryData.flags.svg}
        alt={countryData.flags.alt}
        className="md-w rounded-lg w-full h-fit max-h-[550px]  max-w-[600px]"
      />
      <div className="flex flex-col gap-4 justify-center items-center mt-2">
        <h2 className="text-4xl md:text-7xl font-bold text-center">
          {countryData.name.common}
        </h2>
        <div
          className={
            dark
              ? "text-lg text-gray-200/90 flex-col gap-4"
              : "text-lg text-gray-800 flex-col gap-4"
          }
        >
          <div>
            Official Name :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.name.official
                ? countryData.name.official
                : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Population :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.population
                ? countryData.population.toLocaleString("en-IN")
                : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Region :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.region ? countryData.region : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Sub Region :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.subregion ? countryData.subregion : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Capital :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.capital
                ? countryData.capital.join(", ")
                : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Top Level Domain :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.tld ? countryData.tld.join(", ") : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Currencies :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.currencies
                ? Object.keys(countryData.currencies).join(", ")
                : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Languages :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.languages
                ? Object.values(countryData.languages).join(", ")
                : "Undefined"}
            </span>{" "}
          </div>
          <div>
            Map :{" "}
            <Link
              to={countryData.maps.googleMaps}
              className="font-bold text-sky-500 underline"
            >
              {" "}
              Show Map{" "}
            </Link>{" "}
          </div>
          <div>
            Time Zone :{" "}
            <span
              className={
                dark ? "font-bold text text-white" : "font-bold text text-black"
              }
            >
              {countryData.timezones
                ? countryData.timezones.join(", ")
                : "Undefined"}
            </span>{" "}
          </div>
        </div>

        {borderContries.length > 1 && (
          <div
            className={
              dark
                ? "text-xl text-gray-200/90 flex flex-col lg:flex-row justify-center items-center gap-4 lg:w-[400px] xl:w-[550px]"
                : "text-xl text-gray-900/90 flex flex-col lg:flex-row justify-center items-center gap-4 lg:w-[400px] xl:w-[550px]"
            }
          >
            <div className="w-fit lg:text-nowrap">Border Countries: </div>
            <div
              className={
                dark
                  ? "flex flex-wrap flex-row gap-2 font-bold text-white text-lg"
                  : "flex flex-wrap flex-row gap-2 font-bold text-black text-lg"
              }
            >
              {borderContries.map((border) => {
                return (
                  <Link
                    to={`/${border}`}
                    key={border}
                    className={
                      dark
                        ? "border-2 bg-gray-400/40 border-white rounded-lg px-2"
                        : "border-2 bg-sky-100 border-black rounded-lg px-2"
                    }
                  >
                    {" "}
                    {border}{" "}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryBlock;
