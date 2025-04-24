const COUNTRIES = ["Israel", "USA", "Canada", "France", "England"];

function CountriesDropdown({ handleChange }) {
    return (
        <select className="form-select mb-2" onChange={handleChange}>
            {COUNTRIES.map(country => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
    );
}

export default CountriesDropdown;
