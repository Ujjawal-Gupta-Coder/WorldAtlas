import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header.jsx";
import Search from "./Components/Search.jsx";
import Filter from "./Components/Filter.jsx";
import CountryList from "./Components/CountryList.jsx";
import Loading from "./Components/LoadingCountryList.jsx";
import Footer from "./Components/Footer.jsx";
import { ThemeContext } from "./contexts/themeContext.jsx";
const URL = import.meta.env.VITE_BASE_URL; 
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [contenentFilter, setContenentFilter] = useState("NA");
  const [searchCountry, setsearchCountry] = useState("");
  const { dark } = useContext(ThemeContext);

  const [countryData, setCountryData] = useState();
  const fetchData = async () => {
    try {
      const raw = await fetch(URL);
      const response = await raw.json();
      setCountryData(response);
    } catch (err) {
      console.error("Error in fetching data: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={
        dark
          ? "w-full h-fit min-h-screen bg-slate-800"
          : "w-full h-fit min-h-screen bg-gray-300"
      }
    >
      <Header />
      <div
        className={
          dark
            ? "h-[120px] w-[100%] md:w-[80%] mx-auto my-8 md:my-3 bg-slate-800 text-white flex flex-wrap gap-x-4 flex-col md:flex-row justify-between px-4 items-start md:items-center"
            : "h-[120px] w-[100%] md:w-[80%] mx-auto my-8 md:my-3 bg-gray-300 text-black flex flex-wrap gap-x-4 flex-col md:flex-row justify-between px-4 items-start md:items-center"
        }
      >
        <Search
          searchCountry={searchCountry}
          setsearchCountry={setsearchCountry}
        />
        <Filter setContenentFilter={setContenentFilter} />
      </div>
      {countryData ? (
        <CountryList
          searchCountry={searchCountry}
          contenentFilter={contenentFilter}
          countryData={countryData}
        />
      ) : (
        <Loading />
      )}
      <Footer />
      <Analytics />
    </div>
  );
}
