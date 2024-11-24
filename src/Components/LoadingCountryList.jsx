import React from "react";
import Loading from "./LoadingCountryCard";
const LoadingCountryList = () => {
  const array = new Array(20).fill(0);
  return (
    <div className="flex flex-wrap gap-12 h-fit min-h-custom items-center justify-center w-full lg:w-[85%] px-8 lg:px-0 mx-auto pb-8">
      {array.map((elem, id) => {
        return <Loading key={id} />;
      })}
    </div>
  );
};

export default LoadingCountryList;
