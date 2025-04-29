
import CityFormComponent from './CityFormComponent';

function CityForm({ cities, addCity, setShowForm }) {

    const handleSaveCity = (formData) => {
        // Create a new city object with the form data and set isFavorite to false
        const newCity = {
            ...formData,
            isFavorite: false
        };

        // Add the new city using the addCity function from props
        addCity(newCity);

        // Close the form
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <CityFormComponent
            cities={cities}
            onSave={handleSaveCity}
            onCancel={handleCancel}
            isEditing={false}
        />
    );
}

export default CityForm;

