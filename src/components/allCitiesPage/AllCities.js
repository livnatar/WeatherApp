
import {useState} from 'react';
import CitiesList from './CitiesList';
import CityForm from './form/CityForm';
import AddCityButton from "./AddCityButton";


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