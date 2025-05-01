import Header from "./components/header/Header";
import FavoriteCities from "./components/favoriteCities/FavoriteCities";
import About from "./components/About";
import NotFound from "./components/NotFound";
import AllCities from "./components/allCitiesPage/AllCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {useEffect, useReducer} from "react";
import citiesReducer, { ACTION_TYPES } from "./citiesReducer";

/**
 * Root component of the application.
 * Manages cities state using useReducer and provides routing for different views.
 *
 * @returns {JSX.Element} The main application component.
 * @constructor
 */
function App() {

    /**
     * Initializes the cities state from localStorage if available.
     * If localStorage is empty or parsing fails, returns an empty array.
     *
     * @returns {Array} Initial cities state.
     */
    const [cities, dispatch] = useReducer(citiesReducer, [], () => {
        try {
            const savedCities = localStorage.getItem('weatherCities');
            return savedCities ? JSON.parse(savedCities) : [];
        } catch (error) {
            console.error("Failed to load cities from localStorage:", error);
            return [];
        }
    });

    /**
     * Persists the current cities state to localStorage whenever it changes.
     */
    useEffect(() => {
        try {
            localStorage.setItem('weatherCities', JSON.stringify(cities));
        } catch (error) {
            console.error("Failed to save cities to localStorage:", error);
        }
    }, [cities]);

    /**
     * Dispatches an action to add a new city to the cities state.
     *
     * @param {Object} city - The city object to add.
     */
    const addCity = (city) => {
        dispatch({ type: ACTION_TYPES.ADD_CITY, payload: city });
    };

    /**
     * Dispatches an action to update an existing city.
     *
     * @param {string} originalName - The original name of the city to update.
     * @param {Object} updatedCity - The updated city object.
     */
    const updateCity = (originalName, updatedCity) => {
        dispatch({
            type: ACTION_TYPES.UPDATE_CITY,
            payload: { originalName, updatedCity }
        });
    };

    /**
     * Dispatches an action to delete a city by name.
     *
     * @param {string} cityName - The name of the city to delete.
     */
    const deleteCity = (cityName) => {
        dispatch({ type: ACTION_TYPES.DELETE_CITY, payload: cityName });
    };

    /**
     * Dispatches an action to toggle a city's favorite status.
     *
     * @param {string} cityName - The name of the city to toggle.
     */
    const toggleFavorite = (cityName) => {
        dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITE, payload: cityName });
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={
                            <FavoriteCities
                                cities={cities}
                            />
                        }/>
                        <Route path="/AllCities" element={
                            <AllCities
                                cities={cities}
                                addCity={addCity}
                                updateCity={updateCity}
                                deleteCity={deleteCity}
                                toggleFavorite={toggleFavorite}
                            />
                        }/>
                        <Route path="/About" element={<About/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
