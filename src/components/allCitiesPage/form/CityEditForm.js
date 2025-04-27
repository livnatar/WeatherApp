
import CityFormComponent from './CityFormComponent';

function CityEditForm({ city, onSave, onCancel, cities }) {
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

// import {useState} from 'react';
// import CountriesDropdown from "./CountriesDropdown";
//
// function CityEditForm({city, onSave, onCancel}) {
//     const [formData, setFormData] = useState({
//         name: city.name,
//         country: city.country,
//         latitude: city.latitude,
//         longitude: city.longitude,
//     });
//
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave(formData);
//     };
//
//     return (
//         <div className="list-group-item">
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-2">
//                     <label htmlFor="name" className="form-label">City Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//
//                 <div className="mb-2">
//                     <label htmlFor="country" className="form-label">Country</label>
//                     <CountriesDropdown
//                         handleChange={handleChange}
//                         value={formData.country}
//                         id = "country"
//                     />
//                 </div>
//
//                 <div className="row mb-2">
//                     <div className="col">
//                         <label htmlFor="latitude" className="form-label">Latitude</label>
//                         <input
//                             type="number"
//                             step="0.000001"
//                             className="form-control"
//                             id="latitude"
//                             name="latitude"
//                             value={formData.latitude}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//
//                     <div className="col">
//                         <label htmlFor="longitude" className="form-label">Longitude</label>
//                         <input
//                             type="number"
//                             step="0.000001"
//                             className="form-control"
//                             id="longitude"
//                             name="longitude"
//                             value={formData.longitude}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 </div>
//
//                 <div className="d-flex gap-2">
//                     <button type="submit" className="btn btn-primary btn-sm">
//                         Save
//                     </button>
//                     <button
//                         type="button"
//                         className="btn btn-secondary btn-sm"
//                         onClick={onCancel}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
//
// export default CityEditForm;
//
// // <input
// //     type="text"
// //     className="form-control"
// //     id="country"
// //     name="country"
// //     value={formData.country}
// //     onChange={handleChange}
// //     required
// // />