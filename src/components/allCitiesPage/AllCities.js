
import {useState} from 'react';
import CitiesList from './CitiesList';
import CityForm from './CityForm';
import AddCityButton from "./AddCityButton";


function AllCities({cities, setCities}) {

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <h1>All Cities</h1>

            { showForm ? (
                <CityForm
                    setCities={setCities}
                    setShowForm={setShowForm}
                />
            ) : (
                <>
                    <AddCityButton
                        onClick={() => setShowForm(true)}
                    />
                    <CitiesList
                        cities={cities}
                        setCities={setCities}
                    />
                </>
            )}

        </div>
    );
}

export default AllCities;