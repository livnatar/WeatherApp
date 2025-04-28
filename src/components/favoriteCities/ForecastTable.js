import React from "react";

// Mapping the weather descriptions to Bootstrap icons
const weatherIcons = {
    "Clear": "bi-brightness-high",                 // ☀️
    "Partly Cloudy": "bi-cloud-sun",                // 🌤️
    "Cloudy": "bi-cloud",                           // ☁️
    "Very Cloudy": "bi-clouds",                     // ☁️☁️
    "Foggy": "bi-cloud-fog2",                       // 🌫️
    "Light rain or showers": "bi-cloud-drizzle",    // 🌦️
    "Occasional showers": "bi-cloud-drizzle",       // 🌦️
    "Isolated showers": "bi-cloud-drizzle",         // 🌦️
    "Light or occasional snow": "bi-snow",          // ❄️
    "Rain": "bi-cloud-rain",                        // 🌧️
    "Snow": "bi-snow",                              // ❄️
    "Mixed": "bi-cloud-sleet",                      // 🌨️
    "Thunderstorm possible": "bi-cloud-lightning",  // ⛈️
    "Thunderstorm": "bi-cloud-lightning-rain",      // ⛈️🌧️
    "Windy": "bi-wind",                             // 🌬️
};

function ForecastTable({ city, data, onClose }) {
    const formatDate = (date) => {
        const dateStr = date.toString();
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        return `${day}/${month}/${year}`;
    };

    const getWeatherIcon = (weather) => {
        const iconClass = weatherIcons[weather] || "bi-question-circle"; // fallback if no match
        return <i className={`bi ${iconClass} me-2`}></i>;
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-3">{city.name}, {city.country} - Weekly Forecast</h3>

            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                    <tr>
                        {data.map((day, index) => (
                            <th key={index}>{formatDate(day.date)}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {data.map((day, index) => (
                            <td key={index}>
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    {getWeatherIcon(day.weather)}
                                    <span className="text-capitalize">{day.weather}</span>
                                </div>
                                <div>Min: {day.temp2m.min}°C</div>
                                <div>Max: {day.temp2m.max}°C</div>
                            </td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>

            <button className="btn btn-primary mt-3" onClick={onClose}>
                Back to list
            </button>
        </div>
    );
}

export default ForecastTable;
