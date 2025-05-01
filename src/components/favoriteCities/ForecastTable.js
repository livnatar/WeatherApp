
/**
 * Renders a 7-day weather forecast in a responsive Bootstrap grid layout.
 *
 * @param {Object} props - Component props.
 * @param {{ name: string, country: string }} props.city - The selected city object.
 * @param {{ dataseries: Array }} props.data - Weather forecast data for the city.
 * @param {boolean} props.isLoading - Indicates if data is being loaded.
 * @param {boolean} props.isError - Indicates if there was an error fetching data.
 * @param {string} props.errorMessage - Error message to display if loading fails.
 * @param {Function} props.onClose - Function to call when the user clicks the "Cancel" or close button.
 * @returns {JSX.Element} Forecast display component or loading/error messages.
 * @constructor
 */
function ForecastTable({ city, data, isLoading, isError, errorMessage, onClose }) {

    /**
     * Formats a numeric date (YYYYMMDD) into a readable form.
     *
     * @param {number} date - Date in YYYYMMDD format.
     * @returns {{ dayName: string, formattedDate: string }} Formatted date with day name and DD/MM format.
     */
    const formatDate = (date) => {
        const dateStr = date.toString();
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);

        // Get full weekday name (Monday, Tuesday, etc.)
        const dateObj = new Date(`${year}-${month}-${day}`);
        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

        return { dayName, formattedDate: `${day}/${month}` };
    };

    /**
     * Mapping the weather descriptions to Bootstrap icons
     * @type {{rain: string, rainsnow: string, lightrain: string, oshower: string, clear: string, ishower: string, mcloudy: string, tsrain: string, windy: string, cloudy: string, lightsnow: string, snow: string, pcloudy: string, fog: string, ts: string}}
     */
    const weatherIcons = {
        "clear": "bi-sun",                      // ☀️
        "pcloudy": "bi-cloud-sun",              // 🌤️
        "mcloudy": "bi-cloud",                  // ☁️
        "cloudy": "bi-clouds",                  // ☁️☁️
        "fog": "bi-cloud-fog2",                 // 🌫️
        "lightrain": "bi-cloud-drizzle",        // 🌦️
        "oshower": "bi-cloud-drizzle",          // 🌦️
        "ishower": "bi-cloud-drizzle",          // 🌦️
        "lightsnow": "bi-snow",                 // ❄️
        "rain": "bi-cloud-rain",                // 🌧️
        "snow": "bi-snow",                      // ❄️
        "rainsnow": "bi-cloud-sleet",           // 🌨️
        "ts": "bi-cloud-lightning",             // ⛈️
        "tsrain": "bi-cloud-lightning-rain",    // ⛈️🌧️
        "windy": "bi-wind",                     // 🌬️
    };

    /**
     * Weather code to readable text mapping
     * @type {{rain: string, rainsnow: string, lightrain: string, oshower: string, clear: string, ishower: string, mcloudy: string, tsrain: string, windy: string, cloudy: string, lightsnow: string, snow: string, pcloudy: string, fog: string, ts: string}}
     */
    const weatherText = {
        "clear": "Clear",
        "pcloudy": "Partly Cloudy",
        "mcloudy": "Mostly Cloudy",
        "cloudy": "Cloudy",
        "fog": "Foggy",
        "lightrain": "Light Rain",
        "oshower": "Occasional Showers",
        "ishower": "Isolated Showers",
        "lightsnow": "Light Snow",
        "rain": "Rain",
        "snow": "Snow",
        "rainsnow": "Rain and Snow",
        "ts": "Thunderstorm Possible",
        "tsrain": "Thunderstorm",
        "windy": "Windy"
    };

    /**
     * Returns an icon element based on a weather code.
     *
     * @param {string} weatherCode - Code representing the weather type.
     * @returns {JSX.Element} Bootstrap icon for the weather.
     */
    const getWeatherIcon = (weatherCode) => {
        const iconClass = weatherIcons[weatherCode] || "bi-question-circle"; // fallback if no match
        return <i className={`bi ${iconClass}`}></i>;
    };

    /**
     * Converts weather code to readable text.
     *
     * @param {string} weatherCode - Code representing the weather.
     * @returns {string} Human-readable weather description.
     */
    const getWeatherText = (weatherCode) => {
        return weatherText[weatherCode] || weatherCode;
    };

    if (isLoading) {
        return (
            <div className="alert alert-info">
                <div className="d-flex align-items-center">
                    <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <span>Loading forecast data...</span>
                </div>
                <button className="btn btn-outline-secondary mt-3" onClick={onClose}>
                    Cancel
                </button>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="alert alert-danger">
                <p>{errorMessage}</p>
                <button className="btn btn-outline-secondary mt-2" onClick={onClose}>
                    Cancel
                </button>
            </div>
        );
    }

    // Check if data exists and has dataseries
    if (!data || !data.dataseries || data.dataseries.length === 0) {
        return (
            <div className="alert alert-warning">
                <p>No forecast data available for this location.</p>
                <button className="btn btn-outline-secondary mt-2" onClick={onClose}>
                    Cancel
                </button>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="m-0">{city.name}, {city.country}</h3>
                <button className="btn btn-sm btn-outline-dark" onClick={onClose}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>

            {/* Use row-cols-7 to ensure all cards in one row with equal width */}
            <div className="row row-cols-7 g-2 pb-4">
                {data.dataseries.slice(0, 7).map((day, index) => {
                    const { dayName, formattedDate } = formatDate(day.date);
                    return (
                        <div key={index} className="col">
                            <div className="card h-100 text-center">
                                <div className="card-header p-2 bg-light">
                                    <strong className="text-truncate d-block">{dayName}</strong>
                                    <div className="small">{formattedDate}</div>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between p-3">
                                    <div className="weather-icon mb-2 fs-1">
                                        {getWeatherIcon(day.weather)}
                                    </div>
                                    <div className="weather-description mb-3 small">
                                        {getWeatherText(day.weather)}
                                    </div>
                                    <div className="d-flex justify-content-center gap-3 mt-2">
                                        <span className="text-muted small">Min: {day.temp2m.min}°C</span>
                                        <span className="text-muted small">Max: {day.temp2m.max}°C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ForecastTable;