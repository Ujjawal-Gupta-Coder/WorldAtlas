import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import gif from "../assets/NotFoundGif.gif";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import CountryBlock from "./CountryBlock";
import Loading from "./LoadingCountryBlock";
import { ThemeContext } from "../contexts/themeContext";
const CountryDetail = () => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState();
  let [isValidCountry, setValidCountry] = useState(true);
  const [borderContries, setBorderContries] = useState([]);

  const { dark } = useContext(ThemeContext);

  const fetchData = async () => {
    try {
      const raw = await fetch(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`
      );
      const response = await raw.json();
      setCountryData(response[0]);

      if (response[0].borders) {
        const data = await Promise.all(
          response[0].borders.map(async (border) => {
            const raw = await fetch(
              `https://restcountries.com/v3.1/alpha/${border}`
            );
            const response = await raw.json();
            return response[0].name.common;
          })
        );
        setValidCountry(true);
        setBorderContries(data);
      }
    } catch (err) {
      setBorderContries([]);
      setValidCountry(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [country]);

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <div
      className={
        dark
          ? "bg-slate-800 w-full h-fit min-h-screen text-white"
          : "bg-gray-300 w-full h-fit min-h-screen text-black"
      }
    >
      <Header />
      <button
        onClick={handleBackButton}
        className={
          dark
            ? "mt-5 mx-4 font-bold text-xl bg-slate-500/50 px-2 rounded-lg border-2 border-white hover:bg-slate-700"
            : "mt-5 mx-4 font-bold text-xl bg-gray-300 px-2 rounded-lg border-2 border-black  hover:bg-gray-100"
        }
      >
        {" "}
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
      <Link
        to="/"
        className={
          dark
            ? "mt-5 mx-4 font-bold text-xl bg-slate-500/50 px-2 rounded-lg border-2 border-white hover:bg-slate-700"
            : "mt-5 mx-4 font-bold text-xl bg-gray-300 px-2 rounded-lg border-2 border-black  hover:bg-gray-100"
        }
      >
        {" "}
        <i className="fa-solid fa-house"></i> Home
      </Link>
      <div
        className={
          !isValidCountry
            ? "w-full flex items-center justify-center h-[600px]"
            : "w-full flex items-center justify-center"
        }
      >
        {!isValidCountry && (
          <div
            className={
              dark
                ? "text-white text-2xl flex flex-col items-center"
                : "text-black text-2xl flex flex-col items-center"
            }
          >
            {" "}
            <img src={gif} className="h-[100px] w-[100px] rounded-full" />{" "}
            Country Not Found.{" "}
          </div>
        )}
        {isValidCountry && !countryData && <Loading />}
        {countryData && (
          <CountryBlock
            countryData={countryData}
            borderContries={borderContries}
          />
        )}
      </div>

      <div className="lg:absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CountryDetail;
