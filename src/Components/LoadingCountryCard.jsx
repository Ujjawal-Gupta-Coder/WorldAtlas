import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const LoadingCountryCard = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={
        dark
          ? "bg-slate-700 text-white w-[270px] h-fit min-h-[400px] py-4  flex flex-col gap-12 items-center rounded-xl overflow-hidden cursor-pointer font-briliant shadow-custom animation-custom"
          : "bg-white text-black w-[270px] h-fit min-h-[400px] py-4  flex flex-col gap-8 items-center rounded-xl overflow-hidden cursor-pointer font-briliant shadow-custom animation-custom"
      }
    >
      <div className="rounded-lg w-[90%] min-h-[150px] max-h-[250px] bg-zinc-400 "></div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="bg-zinc-400 h-[20px] md:w-[90px] w-[90px] rounded-lg"></div>{" "}
          :
          <div className="bg-zinc-400 h-[20px] md:w-[90px] w-[90px] rounded-lg"></div>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-400 h-[20px] md:w-[90px] w-[90px] rounded-lg"></div>{" "}
          :
          <div className="bg-zinc-400 h-[20px] md:w-[90px] w-[90px] rounded-lg"></div>
        </div>
        <div className="flex gap-4">
          <div className="bg-zinc-400 h-[20px] md:w-[90px] w-[90px] rounded-lg"></div>{" "}
          :
          <div className="bg-zinc-400 h-[20px] md:w-[90px] w-[90px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCountryCard;
