
import { useState } from 'react';
import CountryFilter from './CountryFilter';
import useDataApi from "./useDataApi";
import ForecastTable from './ForecastTable';

const FORECAST_SEARCH_URL = 'https://www.7timer.info/bin/api.pl?';
const FORECAST_SEARCH_DEFAULT = 'https://www.7timer.info/bin/api.pl?lon=0&lat=0&product=civillight&output=json';
const FORECAST_URL_ENDING = '&product=civillight&output=json';
const FETCH_ERROR_MSG = 'Something went wrong ...';


/**
 * Component for displaying and managing favorite cities with weather forecasts.
 * Allows filtering by country and shows a forecast when a city is selected.
 *
 * @param {Object[]} cities - List of all city objects including favorite status.
 * @returns {JSX.Element} Rendered list and forecast view for favorite cities.
 * @constructor
 */
function FavoriteCities({cities}) {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [{ data, isLoading, isError }, setUrlForFetch] = useDataApi(FORECAST_SEARCH_DEFAULT, { dataseries: [] });
    const [cityForecast, setCityForecast] = useState(null);

    /**
     * Filters the favorite cities and sorts them alphabetically by name.
     *
     * @type {Object[]} Filtered and sorted favorite cities.
     */
    const favoriteCities = cities
        .filter(city => city.isFavorite)
        .sort((a, b) => a.name.localeCompare(b.name));

    /**
     * Extracts a list of unique countries from the favorite cities.
     *
     * @type {string[]} List of country names.
     */
    const uniqueCountries = [...new Set(favoriteCities.map(city => city.country))];

    /**
     * Filters the favorite cities by the selected country, or returns all if none selected.
     *
     * @type {Object[]} Filtered list of cities.
     */
    const filteredCities = selectedCountry
        ? favoriteCities.filter(city => city.country === selectedCountry)
        : favoriteCities;

    /**
     * Handles the change in selected country from the dropdown.
     * Clears the current forecast.
     *
     * @param e - The event object from the select input.
     */
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setCityForecast(null);
    };


    /**
     * Resets the selected country and clears the current forecast.
     */
    const handleReset = () => {
        setSelectedCountry('');
        setCityForecast(null);
    };

    /**
     * Sets the selected city for showing forecast and updates API fetch URL.
     *
     * @param {Object} city - The city object selected by the user.
     */
    const handleShowForecast = (city) => {
        const forecastUrl = `${FORECAST_SEARCH_URL}lon=${city.longitude}&lat=${city.latitude}${FORECAST_URL_ENDING}`;
        setUrlForFetch(forecastUrl);
        setCityForecast(city);
    };

    /**
     * Clears the forecast view by deselecting the city.
     */
    const handleCloseForecast = () => {
        setCityForecast(null);
    };

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">
                    <i className="bi bi-star-fill text-warning me-2"></i>
                    Your Favorite Cities
                </h2>

                <span className="badge bg-primary rounded-pill">
                    {filteredCities.length} {filteredCities.length === 1 ? 'city' : 'cities'}
                </span>
            </div>

            {/* Separate CountryFilter component */}
            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body bg-light rounded">
                    <CountryFilter
                        countries={uniqueCountries}
                        selectedCountry={selectedCountry}
                        onSelectCountry={handleCountryChange}
                        onReset={handleReset}
                    />
                </div>
            </div>

            {filteredCities.length > 0 ? (
                <div className="list-group shadow-sm mb-3">
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
                        ) : (
                            <div key={city.name} className="list-group-item border-start-0 border-end-0 p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                            <h5 className="mb-0 fw-bold">{city.name},</h5>
                                            <span className="bg-light text-dark ms-2">{city.country}</span>
                                        </div>
                                        <div className="text-muted small mt-1">
                                            <i className="bi bi-geo me-1"></i>
                                            {city.latitude}, {city.longitude}
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-outline-primary rounded-pill"
                                        onClick={() => handleShowForecast(city)}
                                    >
                                        <i className="bi bi-cloud-sun me-2"></i>
                                        Weather Forecast
                                    </button>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            ) : (
                <div className="alert alert-info bg-light border-info d-flex align-items-center">
                    <i className="bi bi-info-circle me-3 fs-4"></i>
                    <p className="mb-0">
                        No favorite cities yet. Add some in the All Cities section!
                    </p>
                </div>
            )}
        </div>
    );
}

export default FavoriteCities;