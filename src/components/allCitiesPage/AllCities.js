
import {useState} from 'react';
import CitiesList from './CitiesList';
import CityForm from './form/CityForm';
import AddCityButton from "./AddCityButton";

/**
 * AllCities component displays a list of cities and handles adding new ones.
 * It toggles between a city list view and a form to add a new city.
 *
 * @param {Object} props
 * @param {Array<Object>} props.cities - Array of city objects to be displayed.
 * @param {function} props.addCity - Callback to add a new city to the list.
 * @param {function} props.updateCity - Callback to update a city's details.
 * @param {function} props.deleteCity - Callback to remove a city from the list.
 * @param {function} props.toggleFavorite - Callback to toggle a city's favorite status.
 * @returns {JSX.Element} The full UI to manage all cities.
 * @constructor
 */
function AllCities({cities, addCity, updateCity, deleteCity, toggleFavorite}) {

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <h1>All Cities</h1>

            { showForm ? (
                <CityForm
                    cities={cities}
                    addCity={addCity}
                    setShowForm={setShowForm}
                />
            ) : (
                <>
                    <AddCityButton
                        onClick={() => setShowForm(true)}
                    />
                    <CitiesList
                        cities={cities}
                        updateCity={updateCity}
                        deleteCity={deleteCity}
                        toggleFavorite={toggleFavorite}
                    />
                </>
            )}

        </div>
    );
}

export default AllCities;