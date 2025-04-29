
import CityFormComponent from './CityFormComponent';

function CityEditForm({ city, cities, onSave, onCancel }) {
    return (
        <CityFormComponent
            initialCity={city}
            cities={cities}
            onSave={onSave}
            onCancel={onCancel}
            isEditing={true}
        />
    );
}

export default CityEditForm;
