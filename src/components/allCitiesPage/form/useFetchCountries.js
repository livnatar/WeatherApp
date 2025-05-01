import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch a list of countries from the Nobel Prize API.
 * Falls back to an error state if the request fails.
 *
 * @returns {{
 *   countries: string[],   // Sorted array of country names
 *   loading: boolean,      // Whether the fetch is in progress
 *   error: string|null     // Error message if fetch fails, otherwise null
 * }}
 */
const useFetchCountries = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://api.nobelprize.org/v1/country.json');
                // Transform the data from object format to array of country names
                const countriesData = Object.values(response.data.countries).map(country => country.name);
                // Sort countries alphabetically
                countriesData.sort();
                setCountries(countriesData);
                setLoading(false);
            } catch (err) {
                setError('Failed to load countries');
                setLoading(false);
            }
        };

        fetchCountries();
    }, []); // Empty dependency array means this effect runs once on mount

    return { countries, loading, error };
};

export default useFetchCountries;