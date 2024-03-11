const CountryData = (props) => {
    const {country}=props
    return (
        <div>
            <p>Country Data: {country.name.common}</p>
        </div>
    );
};

export default CountryData;