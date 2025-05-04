
/**
 * Enum-like object containing all possible action types
 * that can be dispatched to the cities reducer.
 *
 * @type {{UPDATE_CITY: string, INIT_CITIES: string, ADD_CITY: string, DELETE_CITY: string, TOGGLE_FAVORITE: string}}
 */
export const ACTION_TYPES = {
    ADD_CITY: 'ADD_CITY',
    UPDATE_CITY: 'UPDATE_CITY',
    DELETE_CITY: 'DELETE_CITY',
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
    INIT_CITIES: 'INIT_CITIES'
};

/**
 * Reducer function to manage the state of cities.
 * It handles different actions like adding, updating,
 * deleting cities, toggling favorites, and initializing from storage.
 *
 * @param {Array} state - The current state of cities.
 * @param {Object} action - An action with a `type` and optional `payload`.
 * @param {string} action.type - The type of action to perform.
 * @param {*} action.payload - The data needed to perform the action.
 *
 * @returns {Array} The updated state after the action is applied.
 */
const citiesReducer = (state, action) => {

    switch (action.type) {
        case ACTION_TYPES.INIT_CITIES:
            // Initialize state with cities loaded from external source
            return action.payload;

        case ACTION_TYPES.ADD_CITY:
            // Add a new city to the state
            return [...state, action.payload];

        case ACTION_TYPES.UPDATE_CITY:
            // Update an existing city based on its name
            return state.map(city =>
                city.name === action.payload.originalName
                    ? { ...action.payload.updatedCity }
                    : city
            );

        case ACTION_TYPES.DELETE_CITY:
            // Remove a city from the state by name
            return state.filter(city => city.name !== action.payload);

        case ACTION_TYPES.TOGGLE_FAVORITE:
            // Toggle the favorite status of a city
            return state.map(city =>
                city.name === action.payload
                    ? { ...city, isFavorite: !city.isFavorite }
                    : city
            );

        default:
            // Return current state if action type is unrecognized
            return state;
    }
};

export default citiesReducer;