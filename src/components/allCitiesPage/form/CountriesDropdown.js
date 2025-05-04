import useFetchCountries from '../../../customHooks/useFetchCountries';

/**
 * Fallback list of countries in case fetching fails.
 * @type {string[]}
 */
const COUNTRIES = ["Israel", "USA", "Canada", "France", "England"];

/**
 * CountriesDropdown renders a select input for choosing a country.
 * It fetches the list of countries from an API, and falls back to a default list on error.
 *
 * @param {Object} props
 * @param {function} props.handleChange - Callback for when the selected country changes.
 * @param {string} props.value - Currently selected country value.
 * @param {boolean|null} props.isValid - Validation state (true, false, or null/undefined).
 * @param {string} props.id - HTML id for the select element.
 * @returns {JSX.Element} A select dropdown populated with countries.
 * @constructor
 */
function CountriesDropdown({ handleChange, value, isValid, id }) {

    const { countries, loading, error } = useFetchCountries();

    /**
     * Displayed list of countries, either from API or fallback.
     * @type {string[]}
     */
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