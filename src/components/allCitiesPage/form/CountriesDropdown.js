
import Select from 'react-select';
import useFetchCountries from '../../../customHooks/useFetchCountries';

/**
 * Fallback list of countries in case fetching fails.
 * @type {string[]}
 */
const COUNTRIES = ["Israel", "USA", "Canada", "France", "England"];

/**
 * CountriesDropdown renders a select input using react-select.
 * It supports validation and scrollable dropdown.
 *
 * @param {Object} props
 * @param {function} props.handleChange - Callback when selected country changes.
 * @param {string} props.value - Currently selected country.
 * @param {boolean|null} props.isValid - Validation state (true, false, or null).
 * @param {string} props.id - HTML id for accessibility.
 * @returns {JSX.Element}
 */
function CountriesDropdown({ handleChange, value, isValid, id }) {
    const { countries, loading, error } = useFetchCountries();

    const displayedCountries = (error ? COUNTRIES : countries).map((country) => ({
        label: country,
        value: country
    }));

    const handleSelectChange = (selectedOption) => {
        handleChange({
            target: {
                name: 'country',
                value: selectedOption?.value || ''
            }
        });
    };

    return (
        <div className="mb-2">
            <Select
                inputId={id}
                name="country"
                options={displayedCountries}
                value={value ? { label: value, value } : null}
                onChange={handleSelectChange}
                isLoading={loading}
                placeholder={loading ? "Loading countries..." : "Select a country"}
                classNamePrefix="react-select"
                className={`react-select-container ${isValid === false ? 'is-invalid' : isValid === true ? 'is-valid' : ''}`}
            />
            {isValid === false && (
                <div className="invalid-feedback d-block">
                    Please select a country
                </div>
            )}
        </div>
    );
}

export default CountriesDropdown;
