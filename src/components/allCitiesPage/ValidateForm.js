
export function validateCityName(value, cities) {
    const trimmed = value.trim();
    const regex = /^[a-zA-Z\s]+$/;

    if (!regex.test(trimmed)) return false;

    const normalized = trimmed.toLowerCase();
    const existingNames = cities.map(city =>
        city.name?.trim().toLowerCase()
    );

    return !existingNames.includes(normalized);
}

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


