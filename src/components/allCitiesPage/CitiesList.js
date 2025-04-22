import CityRow from './CityRow';
import CityEditForm from "./CityEditForm";
import {useState} from "react";

function CitiesList({ cities, setCities }) {

    const [editingCityId, setEditingCityId] = useState(null);

    const deleteCity = (cityId) => {
        setCities(cities.filter(city => city.name !== cityId));
        // add modal that asks if sure about deleting
    };

    const toggleFavorite = (cityId) => {
        setCities(cities.map(city =>
            city.name === cityId ? {...city, isFavorite: !city.isFavorite} : city
        ));
    };

    const handleEditCity = (cityName) => {
        setEditingCityId(cityName);
    };

    const handleUpdateCity = (updatedCity) => {
        setCities(cities.map(city =>
            city.name === updatedCity.name ? updatedCity : city
        ));
        setEditingCityId(null); // Exit edit mode
    };

    const handleCancelEdit = () => {
        setEditingCityId(null);
    };
    return (
        <div>
            {cities.length > 0 ? (
                <div className="list-group">
                    {cities.map(city => (
                        editingCityId === city.name ? (
                            <CityEditForm
                                key={city.name}
                                city={city}
                                onSave={handleUpdateCity}
                                onCancel={handleCancelEdit}
                            />
                        ) : (
                            <CityRow
                                key={city.name}
                                city={city}
                                onEdit={() => handleEditCity(city.name)}
                                onDelete={() => deleteCity(city.name)}
                                onToggleFavorite={() => toggleFavorite(city.name)}
                            />
                        )
                    ))}
                </div>
            ) : (
                <p>No cities added yet. Add your first city!</p>
            )}
        </div>
    );
}

export default CitiesList;