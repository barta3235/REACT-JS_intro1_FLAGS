import CountryData from "../countryData/CountryData";


const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></CountryData> */}
            <CountryData {...props}></CountryData>

        </div>
    );
};

export default CountryDetail;