import React, { useContext } from 'react'
import CountryCard from './CountryCard'
import { ThemeContext } from '../contexts/themeContext';
import gif from '../assets/NotFoundGif.gif'

const CountryList = ({searchCountry, contenentFilter, countryData }) => {
  const {dark} = useContext(ThemeContext);

  let filteredCounrtyData = [...countryData];
  if(contenentFilter !== 'NA') {
      filteredCounrtyData = countryData.filter((data) => {
        const isFound = data.continents.find((elem) => {
          return elem === contenentFilter;
        })
        return isFound;
    })
  }
  
  if(searchCountry.length !== 0) {
    filteredCounrtyData = filteredCounrtyData.filter((data) => {
      return data.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  })
  }

  return (
      <div className='flex flex-wrap gap-12 h-fit min-h-custom items-center justify-center w-full lg:w-[85%] px-8 lg:px-0 mx-auto pb-8'>
        
        {(filteredCounrtyData.length === 0)? <div className={dark?'text-white flex flex-col items-center':'text-black flex flex-col items-center'}> <img src={gif} className='h-[100px] w-[100px] rounded-full' /> Country Not Found. </div>  :filteredCounrtyData.map((data, idx) => {
       return <CountryCard key={idx} flag={data.flags.svg}  name={data.name.common} population={data.population} region={data.region} capital={data.capital} />
      })}
      </div>
  )
}

export default CountryList
