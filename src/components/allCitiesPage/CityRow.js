/**
 * A simple static component.
 * @returns {JSX.Element}
 * @constructor
 */
function CityRow({city, onEdit, onDelete, onToggleFavorite}) {

    return (
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{city.cityName}, {city.country}</h5>
                <small>
                    Coordinates: {city.latitude}, {city.longitude}
                </small>
            </div>

            <div className="btn-group">
                <button
                    className="btn btn-outline-primary"
                    onClick={onToggleFavorite}
                >
                    {city.isFavorite ? '★' : '☆'}
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={onEdit}
                >
                    Edit
                </button>

                <button
                    className="btn btn-outline-danger"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default CityRow;