import CityRow from './CityRow';
import CityEditForm from "./form/CityEditForm";
import DeleteConfirmationModal from './DeleteConfirmationModal';
import {useState} from "react";

function CitiesList({ cities, updateCity, deleteCity, toggleFavorite}) {

    const [editingCity, setEditingCity] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [cityToDelete, setCityToDelete] = useState(null);

    const handleDeleteClick = (cityName) => {
        setCityToDelete(cityName);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setCityToDelete(null);
    };

    const confirmDelete = () => {
        deleteCity(cityToDelete);
        setShowDeleteModal(false);
        setCityToDelete(null);
    };

    const handleToggleFavorite = (cityName) => {
        toggleFavorite(cityName);
    };

    const handleEditCity = (city) => {
        setEditingCity(city);
    };

    const handleUpdateCity = (updatedCity) => {
        updateCity(editingCity.name, updatedCity);
        setEditingCity(null);
    };

    const handleCancelEdit = () => {
        setEditingCity(null);
    };
    return (
        <div>
            {cities.length > 0 ? (
                <div className="list-group">
                    {cities.map(city => (
                        editingCity?.name === city.name ? (
                            <CityEditForm
                                key={city.name}
                                city={city}
                                cities = {cities}
                                onSave={handleUpdateCity}
                                onCancel={handleCancelEdit}
                            />
                        ) : (
                            <CityRow
                                key={city.name}
                                city={city}
                                onEdit={() => handleEditCity(city)}
                                onDelete={() => handleDeleteClick(city.name)}
                                onToggleFavorite={() => handleToggleFavorite(city.name)}
                            />
                        )
                    ))}
                </div>
            ) : (
                <p>No cities added yet. Add your first city!</p>
            )}

            <DeleteConfirmationModal
                show={showDeleteModal}
                cityName={cityToDelete}
                onClose={handleCloseDeleteModal}
                onConfirm={confirmDelete}
            />

        </div>
    );
}

export default CitiesList;