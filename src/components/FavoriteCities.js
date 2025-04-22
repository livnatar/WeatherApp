/**
 * A simple static component.
 * @returns {JSX.Element}
 * @constructor
 */
function FavoriteCities({cities}) {

    const favoriteCities = cities.filter(city => city.isFavorite);

    return (
        <div>
            <h2>Your Favorite Cities</h2>

            {favoriteCities.length > 0 ? (
                <ul>
                    {favoriteCities.map(city => (
                        <li key={city.name}> {city.name} {city.country} ></li> // add bootstrap button called get weather forecast
                    ))}
                </ul>
            ) : (
                <p>No favorite cities yet. Add some in the All Cities section!</p>
            )}
        </div>
    );
}

export default FavoriteCities;