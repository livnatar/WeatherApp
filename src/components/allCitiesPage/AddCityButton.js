/**
 * A modern add city button component using only Bootstrap classes.
 * @returns {JSX.Element}
 * @constructor
 */
function AddCityButton({ onClick }) {
    return (
        <div className="d-grid d-md-flex justify-content-md-end mb-4">
            <button
                className="btn btn-primary py-2 px-4 rounded-3 shadow-sm"
                onClick={onClick}
            >
                <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-plus-circle me-2"></i>
                    <span>Add New City</span>
                </div>
            </button>
        </div>
    );
}

export default AddCityButton;

// function AddCityButton({ onClick }) {
//
//     return (
//         <div>
//             <button
//                 className="btn btn-primary mb-3"
//                 onClick={onClick}
//             >
//                 Add New City
//             </button>
//         </div>
//     );
// }
//
// export default AddCityButton;