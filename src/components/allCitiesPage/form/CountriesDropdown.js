import useFetchCountries from './useFetchCountries';

const COUNTRIES = ["Israel", "USA", "Canada", "France", "England"];

function CountriesDropdown({ handleChange, value, isValid, id }) {
    const { countries, loading, error } = useFetchCountries();

    // if fetch failed the dropdown will use the default COUNTRIES list
    const displayedCountries = error ? COUNTRIES : countries;

    return (
        <div className="mb-2">
            <select
                className={`form-select mb-2 ${
                    isValid === false ? "is-invalid" :
                        isValid === true ? "is-valid" : ''
                }`}
                id={id}
                name="country"
                value={value || ""}
                onChange={handleChange}
                disabled={loading}
            >
                <option value="" disabled>
                    {loading ? "Loading countries..." : "Select a country"}
                </option>
                {displayedCountries.map(country => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            {isValid === false && (
                <div className="invalid-feedback">
                    Please select a country
                </div>
            )}
        </div>
    );
}

export default CountriesDropdown;