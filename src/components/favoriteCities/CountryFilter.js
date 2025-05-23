
/**
 * CountryFilter component allows users to filter a list of cities by country.
 * Displays a dropdown with a list of countries and a reset button to clear the selection.
 *
 * @param {Object} props
 * @param {string[]} props.countries - Array of unique country names to display in the dropdown.
 * @param {string} props.selectedCountry - Currently selected country value.
 * @param {function} props.onSelectCountry - Callback function to handle country selection change.
 * @param {function} props.onReset - Callback function to reset the selected country.
 * @returns {JSX.Element} A dropdown filter and a reset button.
 * @constructor
 */
function CountryFilter({ countries, selectedCountry, onSelectCountry, onReset }) {

    return (
        <div className="row">
            <div className="col-auto">
                <select
                    id="country-select"
                    name="country"
                    className="form-select rounded-pill"
                    value={selectedCountry}
                    onChange={onSelectCountry}
                    autoComplete="country"
                >
                    <option value="">All Countries</option>
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>
            <div className="col-12 col-sm-auto mt-2 mt-sm-0">
                <button
                    className="btn btn-outline-secondary"
                    onClick={onReset}
                    disabled={!selectedCountry}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CountryFilter;
