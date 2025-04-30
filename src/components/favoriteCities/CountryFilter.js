/**
 * A component for filtering cities by country.
 * @param {string[]} countries - List of countries to display in the dropdown
 * @param {string} selectedCountry - Currently selected country
 * @param {function} onSelectCountry - Handler for country selection
 * @param {function} onReset - Handler for reset button click
 * @returns {JSX.Element}
 */
function CountryFilter({ countries, selectedCountry, onSelectCountry, onReset }) {
    return (
        <div className="row mb-4 mt-3">
            <div className="col-auto">
                <select
                    className="form-select rounded-pill"
                    value={selectedCountry}
                    onChange={onSelectCountry}
                >
                    <option value="">All Countries</option>
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>
            <div className="col-auto">
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


// /**
//  * A component for filtering cities by country.
//  * @param {string[]} countries - List of countries to display in the dropdown
//  * @param {string} selectedCountry - Currently selected country
//  * @param {function} onSelectCountry - Handler for country selection
//  * @param {function} onReset - Handler for reset button click
//  * @returns {JSX.Element}
//  */
// function CountryFilter({ countries, selectedCountry, onSelectCountry, onReset }) {
//     return (
//         <div className="d-flex mb-3 mt-3 align-items-center">
//             <select
//                 className="form-select me-2"
//                 value={selectedCountry}
//                 onChange={onSelectCountry}
//                 style={{ maxWidth: '200px' }}
//             >
//                 <option value="">All Countries</option>
//                 {countries.map(country => (
//                     <option key={country} value={country}>{country}</option>
//                 ))}
//             </select>
//             <button
//                 className="btn btn-outline-secondary"
//                 onClick={onReset}
//                 disabled={!selectedCountry}
//             >
//                 Reset
//             </button>
//         </div>
//     );
// }
//
// export default CountryFilter;