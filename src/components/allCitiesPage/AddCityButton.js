
function AddCityButton({ onClick }) {

    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                onClick={onClick}
            >
                Add New City
            </button>
        </div>
    );
}

export default AddCityButton;