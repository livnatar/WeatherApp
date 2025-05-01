
/**
 * Validates a city name.
 *
 * - Allows letters and spaces only.
 * - Must be unique among existing cities (case-insensitive).
 * - If in edit mode and the name hasn't changed, it's considered valid.
 *
 * @param {string} value - The city name to validate.
 * @param {{name: string}[]} cities - Array of existing city objects.
 * @param {string|null} [currentName=null] - The original name of the city being edited (if any).
 * @returns {boolean} - True if valid, false otherwise.
 */
export const validateCityName = (value, cities, currentName= null) => {

    // If we're in edit mode and the name hasn't changed, it's valid
    if (currentName && value === currentName) return true;

    // Check if name is not empty and contains only letters
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!value || !nameRegex.test(value)) return false;

    // Check if name is unique
    const cityExists = cities.some(city =>
        city.name.toLowerCase() === value.toLowerCase()
    );
    return !cityExists;
};

/**
 * Validates a country selection.
 *
 * @param {string} value - The selected country value.
 * @returns {boolean} - True if non-empty, false otherwise.
 */
export function validateCountry(value) {
    return value.trim() !== '';
}

/**
 * Validates a latitude value.
 *
 * @param {string|number} value - The latitude value.
 * @returns {boolean} - True if it's a number within [-90, 90], false otherwise.
 */
export function validateLatitude(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= -90 && number <= 90;
}

/**
 * Validates a longitude value.
 *
 * @param value - The longitude value.
 * @returns {boolean} - True if it's a number within [-180, 180], false otherwise.
 */
export function validateLongitude(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= -180 && number <= 180;
}


