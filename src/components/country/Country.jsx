import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    const {name,flags,population,area,cca3}=country
    console.log(country);

    const [visited,setVisited]= useState(false);

    const handleVisited=()=>{
        setVisited(!visited);   //toggle
    }

    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited?'Visited': 'Lets go'}</button>
            {
                visited ? 'I have visited this country': 'I wish to visit'
            }
        </div>
    );
};

export default Country;