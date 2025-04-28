/**
 * A component for displaying favorite cities with alphabetical sorting and country filtering.
 * @returns {JSX.Element}
 */
import { useState } from 'react';
import CountryFilter from './CountryFilter'; // Import the separate filter component
import useDataApi from "./useDataApi";
import ForecastTable from './ForecastTable';

const FORECAST_SEARCH_URL = 'https://www.7timer.info/bin/api.pl?';
const FORECAST_SEARCH_DEFAULT = 'https://www.7timer.info/bin/api.pl?lon=0&lat=0&product=civillight&output=json';
const FORECAST_URL_ENDING = '&product=civillight&output=json';
const FETCH_ERROR_MSG = 'Something went wrong ...';


function FavoriteCities({cities}) {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [{ data, isLoading, isError }, setUrlForFetch] = useDataApi(FORECAST_SEARCH_DEFAULT, { dataseries: [] });
    const [cityForecast, setCityForecast] = useState(null);

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
        setCityForecast(null);
    };

    // Reset country filter
    const handleReset = () => {
        setSelectedCountry('');
        setCityForecast(null);
    };

    const handleShowForecast = (city) => {
        // Correctly format the URL by replacing the placeholders with actual values
        const forecastUrl = `${FORECAST_SEARCH_URL}lon=${city.longitude}&lat=${city.latitude}${FORECAST_URL_ENDING}`;
        setUrlForFetch(forecastUrl);
        setCityForecast(city);
    };

    const handleCloseForecast = () => {
        setCityForecast(null);
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
                        cityForecast?.name === city.name ? (
                            <ForecastTable
                                key={city.name}
                                city={city}
                                data={data}
                                isLoading={isLoading}
                                isError={isError}
                                errorMessage={FETCH_ERROR_MSG}
                                onClose={handleCloseForecast}
                              />
                            ):(
                        <li key={city.name} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                <strong>{city.name}</strong>, {city.country}
                            </span>
                            <button className="btn btn-outline-info btn-sm" onClick={() => handleShowForecast(city)}>
                                Get Weather Forecast
                            </button>
                        </li>
                        )
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