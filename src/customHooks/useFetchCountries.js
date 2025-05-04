import { useState, useEffect } from 'react';
import useDataApi from './useDataApi'; // Import your existing hook

/**
 * Custom hook to fetch a list of countries from the Nobel Prize API.
 * Uses the general-purpose useDataApi hook with memoization to ensure
 * countries are fetched only once.
 *
 * @returns {{
 *   countries: string[],   // Sorted array of country names
 *   loading: boolean,      // Whether the fetch is in progress
 *   error: boolean         // Whether an error occurred during fetch
 * }}
 */
const useFetchCountries = () => {
    // Use the existing data fetching hook with countries API URL
    const [{ data, isLoading, isError }] = useDataApi(
        'https://api.nobelprize.org/v1/country.json',
        { countries: [] }
    );

    // Store processed countries array in state
    const [countries, setCountries] = useState([]);

    // Process API response data once it's loaded
    useEffect(() => {
        if (data && data.countries && !isLoading) {
            // Transform data and sort alphabetically
            const countriesData = Object.values(data.countries)
                .map(country => country.name)
                .sort();
            setCountries(countriesData);
        }
    }, [data, isLoading]);

    return {
        countries,
        loading: isLoading,
        error: isError
    };
};

export default useFetchCountries;
