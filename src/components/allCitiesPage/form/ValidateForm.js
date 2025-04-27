
export const validateCityName = (value, cities, isEditing = false) => {
    // If we're in edit mode, the name is valid (since it's read-only)
    if (isEditing) return true;

    // Check if name is not empty and contains only letters
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!value || !nameRegex.test(value)) return false;

    // Check if name is unique
    const cityExists = cities.some(city =>
        city.name.toLowerCase() === value.toLowerCase()
    );
    return !cityExists;
};

export function validateCountry(value) {
    return value.trim() !== '';
}

export function validateLatitude(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= -90 && number <= 90;
}

export function validateLongitude(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= -180 && number <= 180;
}


