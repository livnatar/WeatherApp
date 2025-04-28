import React from "react";

// Mapping the weather descriptions to Bootstrap icons
const weatherIcons = {
    "clear": "bi-brightness-high",                 // ☀️
    "pcloudy": "bi-cloud-sun",                     // 🌤️
    "mcloudy": "bi-cloud",                         // ☁️
    "cloudy": "bi-clouds",                         // ☁️☁️
    "fog": "bi-cloud-fog2",                        // 🌫️
    "lightrain": "bi-cloud-drizzle",               // 🌦️
    "oshower": "bi-cloud-drizzle",                 // 🌦️
    "ishower": "bi-cloud-drizzle",                 // 🌦️
    "lightsnow": "bi-snow",                        // ❄️
    "rain": "bi-cloud-rain",                       // 🌧️
    "snow": "bi-snow",                             // ❄️
    "rainsnow": "bi-cloud-sleet",                  // 🌨️
    "ts": "bi-cloud-lightning",                    // ⛈️
    "tsrain": "bi-cloud-lightning-rain",           // ⛈️🌧️
    "windy": "bi-wind",                            // 🌬️
};

// Weather code to readable text mapping
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

function ForecastTable({ city, data, isLoading, isError, errorMessage, onClose }) {
    const formatDate = (date) => {
        const dateStr = date.toString();
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        return `${day}/${month}/${year}`;
    };

    const getWeatherIcon = (weatherCode) => {
        const iconClass = weatherIcons[weatherCode] || "bi-question-circle"; // fallback if no match
        return <i className={`bi ${iconClass} me-2`}></i>;
    };

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
            <h3 className="mb-3">{city.name}, {city.country} - Weekly Forecast
                <button className="btn btn-outline-secondary mx-3" onClick={onClose}>
                    Cancel
                </button>
            </h3>

            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                    <tr>
                        {data.dataseries.map((day, index) => (
                            <th key={index}>{formatDate(day.date)}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {data.dataseries.map((day, index) => (
                            <td key={index}>
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    {getWeatherIcon(day.weather)}
                                    <span className="text-capitalize">{getWeatherText(day.weather)}</span>
                                </div>
                                <div>Min: {day.temp2m.min}°C</div>
                                <div>Max: {day.temp2m.max}°C</div>
                            </td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ForecastTable;