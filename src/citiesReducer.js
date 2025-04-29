
export const initialState = [];

export const ACTION_TYPES = {
    ADD_CITY: 'ADD_CITY',
    UPDATE_CITY: 'UPDATE_CITY',
    DELETE_CITY: 'DELETE_CITY',
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
    INIT_CITIES: 'INIT_CITIES'
};

const citiesReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.INIT_CITIES:
            return action.payload;

        case ACTION_TYPES.ADD_CITY:
            return [...state, action.payload];

        case ACTION_TYPES.UPDATE_CITY:
            return state.map(city =>
                city.name === action.payload.originalName
                    ? { ...action.payload.updatedCity }
                    : city
            );

        case ACTION_TYPES.DELETE_CITY:
            return state.filter(city => city.name !== action.payload);

        case ACTION_TYPES.TOGGLE_FAVORITE:
            return state.map(city =>
                city.name === action.payload
                    ? { ...city, isFavorite: !city.isFavorite }
                    : city
            );

        default:
            return state;
    }
};

export default citiesReducer;