
import CityFormComponent from './CityFormComponent';

function CityForm({ cities, setCities, setShowForm }) {
    const handleSave = (formData) => {
        setCities(prevCities => [...prevCities, formData]);
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <CityFormComponent
            cities={cities}
            onSave={handleSave}
            onCancel={handleCancel}
            isEditing={false}
        />
    );
}

export default CityForm;

// import { useState } from 'react';
// import CountriesDropdown from "./CountriesDropdown";
// import {
//     validateCityName,
//     validateCountry,
//     validateLatitude,
//     validateLongitude,
// } from './ValidateForm';
//
// function CityForm({ cities, setCities, setShowForm }) {
//
//     const [formData, setFormData] = useState({});
//     const [formValidity, setFormValidity] = useState({});
//
//     // const validators = {
//     //     name: value => value.trim() !== '',
//     //     country: value => value.trim() !== '',
//     //     latitude: value => !isNaN(value) && value >= -90 && value <= 90,
//     //     longitude: value => !isNaN(value) && value >= -180 && value <= 180,
//     // };
//     const validators = {
//         name: value => validateCityName(value, cities),
//         country: validateCountry,
//         latitude: validateLatitude,
//         longitude: validateLongitude,
//     };
//
//
//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData( values => ({ ...values, [name]: value }))
//     //     handleValidate(name, value);
//     // };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const trimmedValue = value.trimStart(); // optional but helps avoid leading spaces
//         setFormData(values => ({ ...values, [name]: trimmedValue }));
//         handleValidate(name, trimmedValue);
//     };
//
//     const handleValidate = (name, value) => {
//         const isValid = validators[name]?.(value);
//         setFormValidity(errors => ({ ...errors, [name]: isValid }));
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         let allValid = true;
//         const newValidity = {};
//
//         for (const field in validators) {
//             const value = formData[field] || "";
//             const isValid = validators[field](value);
//             newValidity[field] = isValid;
//             if (!isValid) allValid = false;
//         }
//
//         setFormValidity(newValidity);
//
//         if (!allValid) return; // prevent submission
//
//         setCities(prevCities => [...prevCities, formData]);
//         setShowForm(false);
//     };
//
//     const handleCancel = () => {
//         setShowForm(false);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <label htmlFor="name" className="form-label">City Name</label>
//                 <input
//                     type="text"
//                     className={`form-control ${
//                         formValidity.name === false ? 'is-invalid' :
//                             formValidity.name === true ? 'is-valid' : ''
//                     }`}
//                     id="name"
//                     name="name"
//                     value={formData.name || ""}
//                     onChange={handleChange}
//                 />
//                 {formValidity.name === false && (
//                     <div className="invalid-feedback">
//                         Name must be unique and contain only letters
//                     </div>
//                 )}
//             </div>
//
//             <div className="mb-2">
//                 <label htmlFor="country" className="form-label">Country</label>
//                 <CountriesDropdown
//                     handleChange={handleChange}
//                     value={formData.country}
//                     isValid={formValidity.country}
//                     id="country"
//                 />
//             </div>
//
//             <div className="row mb-2">
//                 <div className="col">
//                     <label htmlFor="latitude" className="form-label">Latitude</label>
//                     <input
//                         type="number"
//                         step="0.1"
//                         className={`form-control ${
//                             formValidity.latitude === false ? 'is-invalid' :
//                                 formValidity.latitude === true ? 'is-valid' : ''
//                         }`}
//                         id="latitude"
//                         name="latitude"
//                         value={formData.latitude || ""}
//                         onChange={handleChange}
//                     />
//                     {formValidity.latitude === false && (
//                         <div className="invalid-feedback">
//                             Latitude must be in the following range [-90, 90]
//                         </div>
//                     )}
//                 </div>
//
//                 <div className="col">
//                     <label htmlFor="longitude" className="form-label">Longitude</label>
//                     <input
//                         type="number"
//                         step="0.1"
//                         className={`form-control ${
//                             formValidity.longitude === false ? 'is-invalid' :
//                                 formValidity.longitude === true ? 'is-valid' : ''
//                         }`}
//                         id="longitude"
//                         name="longitude"
//                         value={formData.longitude || ""}
//                         onChange={handleChange}
//                     />
//                     {formValidity.longitude === false && (
//                         <div className="invalid-feedback">
//                             Longitude must be in the following range [-180, 180]
//                         </div>
//                     )}
//                 </div>
//             </div>
//
//             <div className="d-flex gap-2">
//                 <button type="submit" className="btn btn-primary">
//                     Add City
//                 </button>
//                 <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={handleCancel}
//                 >
//                     Cancel
//                 </button>
//             </div>
//         </form>
//     );
// }
//
// export default CityForm;
