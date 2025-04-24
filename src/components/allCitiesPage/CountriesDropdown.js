//import {useState} from "react";

const COUNTRIES = ["Israel", "USA", "Canada", "France", "England"];

function CountriesDropdown({ handleChange, value, isValid, id }) {
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
            >
                <option value="" disabled> Select a country</option>
                {COUNTRIES.map(country => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            {isValid === false && (
                <div className="invalid-feedback">
                    Please select a country.
                </div>
            )}
        </div>
    );
}

export default CountriesDropdown;
