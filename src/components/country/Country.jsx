import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry}) => {
    const {name,flags,population,area,cca3}=country
    // console.log(country);

    const [visited,setVisited]= useState(false);

    const handleVisited=()=>{  // state ke modify korar jonno event handler
        setVisited(!visited);   //toggle
    }

    const passWithParams =()=>{
        handleVisitedCountry(country)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple':'white'}} >Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            {/* event trigger */}
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited?'Visited': 'Lets go'}</button>
            {
                visited ? 'I have visited this country': 'I wish to visit'
            }
        </div>
    );
};

export default Country;