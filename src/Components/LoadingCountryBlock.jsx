import React from "react";

const LoadingCountryBlock = () => {
  return (
    <div className="flex flex-col py-8 lg:flex-row gap-12 justify-center items-center lg:h-[600px] w-[90%]">
      <div className="rounded-lg lg:h-[400px] lg:w-[580px] md:h-[230px] md:w-[400px] h-[200px] sm:w-[400px] w-[300px] bg-zinc-500"></div>
      <div className="flex flex-col gap-16 justify-center items-center">
        <div className="bg-zinc-500 h-[50px] lg:w-[500px] sm:w-[370px] w-[300px] rounded-lg"></div>
        <div className="flex-col flex gap-6 px-4">
          <div className="flex gap-4">
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>{" "}
            :
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>{" "}
            :
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>{" "}
            :
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>{" "}
            :
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>{" "}
            :
            <div className="bg-zinc-500 h-[20px] md:w-[200px] w-[150px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCountryBlock;
