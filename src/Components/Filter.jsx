import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';

const Filter = ({setContenentFilter}) => {
  const {dark} = useContext(ThemeContext);
  const handleFilterChange = (e) => {
    setContenentFilter(e.target.value);
  }
  return (
    <div className={dark ? 'flex justify-center items-center rounded-lg bg-DarkCustom  w-[95%] xs:w-[250px] h-[50px] relative px-4' : 'flex justify-center items-center rounded-lg bg-white  w-[95%] xs:w-[250px] h-[50px] relative px-4'}>
      <select name="" className={dark ? 'text-white bg-DarkCustom outline-none w-full h-full' : 'text-black bg-white outline-none w-full h-full'} onChange={handleFilterChange} >
        <option value="NA">All Countries</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Australia</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
  )
}

export default Filter
