/**
 * A component for displaying favorite cities with alphabetical sorting and country filtering.
 * @returns {JSX.Element}
 */
import { useState } from 'react';
import CountryFilter from './CountryFilter'; // Import the separate filter component

function FavoriteCities({cities}) {
    const [selectedCountry, setSelectedCountry] = useState('');

    // Get all favorite cities and sort them alphabetically by name
    const favoriteCities = cities
        .filter(city => city.isFavorite)
        .sort((a, b) => a.name.localeCompare(b.name));

    // Extract unique countries from favorite cities for dropdown
    const uniqueCountries = [...new Set(favoriteCities.map(city => city.country))];

    // Filter cities by selected country
    const filteredCities = selectedCountry
        ? favoriteCities.filter(city => city.country === selectedCountry)
        : favoriteCities;

    // Handle country selection
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    // Reset country filter
    const handleReset = () => {
        setSelectedCountry('');
    };

    return (
        <div>
            <h1>Your Favorite Cities</h1>

            {/* Using the separate CountryFilter component */}
            <CountryFilter
                countries={uniqueCountries}
                selectedCountry={selectedCountry}
                onSelectCountry={handleCountryChange}
                onReset={handleReset}
            />

            {filteredCities.length > 0 ? (
                <ul className="list-group mt-3">
                    {filteredCities.map(city => (
                        <li key={city.name} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                <strong>{city.name}</strong>, {city.country}
                            </span>
                            <button className="btn btn-outline-info btn-sm" onClick={() => alert(`Weather forecast for ${city.name} will be available soon!`)}>
                                Get Weather Forecast
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted">
                    "No favorite cities yet. Add some in the All Cities section!"
                </p>
            )}
        </div>
    );
}

export default FavoriteCities;