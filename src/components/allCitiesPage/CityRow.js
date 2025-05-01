
/**
 * CityRow renders a single row in the city list with details and action buttons.
 *
 * @param {Object} props
 * @param {Object} props.city - The city object containing name, country, coordinates, and favorite status.
 * @param {function} props.onEdit - Callback to trigger editing the city.
 * @param {function} props.onDelete - Callback to trigger deleting the city.
 * @param {function} props.onToggleFavorite - Callback to toggle the city’s favorite status.
 * @returns {JSX.Element} A styled row showing city details and action buttons.
 * @constructor
 */
function CityRow({ city, onEdit, onDelete, onToggleFavorite }) {
    return (
        <div className="list-group-item p-3 border-start-0 border-end-0 border-top-0 border-bottom">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center">
                        <button
                            className={`btn ${city.isFavorite ? 'btn-warning' : 'btn-outline-warning'} me-3 rounded-circle p-2`}
                            onClick={onToggleFavorite}
                            aria-label={city.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                            <i className="bi bi-star-fill"></i>
                        </button>

                        <div>
                            <h5 className="mb-1 fw-bold">{city.name}, {city.country}</h5>
                            <div className="text-muted small d-flex align-items-center">
                                <i className="bi bi-geo-alt me-1"></i>
                                <span>Coordinates: {city.latitude}, {city.longitude}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <div className="d-flex justify-content-md-end">
                        <button
                            className="btn btn-outline-secondary me-2 d-flex align-items-center"
                            onClick={onEdit}
                        >
                            <i className="bi bi-pencil-square"></i>
                            <span className="d-none d-md-inline"></span>
                        </button>

                        <button
                            className="btn btn-outline-danger d-flex align-items-center"
                            onClick={onDelete}
                        >
                            <i className="bi bi-trash"></i>
                            <span className="d-none d-md-inline"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityRow;


// /**
//  * A simple static component.
//  * @returns {JSX.Element}
//  * @constructor
//  */
// function CityRow({city, onEdit, onDelete, onToggleFavorite}) {
//
//     return (
//         <div className="list-group-item d-flex justify-content-between align-items-center">
//             <div>
//                 <h5>{city.name}, {city.country}</h5>
//                 <small>
//                     Coordinates: {city.latitude}, {city.longitude}
//                 </small>
//             </div>
//
//             <div className="btn-group">
//                 <button
//                     className="btn btn-outline-primary"
//                     onClick={onToggleFavorite}
//                 >
//                     {city.isFavorite ? '★' : '☆'}
//                 </button>
//
//                 <button
//                     className="btn btn-outline-secondary"
//                     onClick={onEdit}
//                 >
//                     Edit
//                 </button>
//
//                 <button
//                     className="btn btn-outline-danger"
//                     onClick={onDelete}
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// }
//
// export default CityRow;