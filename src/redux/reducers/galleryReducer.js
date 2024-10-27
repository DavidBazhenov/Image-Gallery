import axios from 'axios';

const initialState = {
    images: [],
    filter: '',
    loading: false,
    error: null,
};

export const fetchImages = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_IMAGES_REQUEST' });

        try {
            const API_KEY = process.env.REACT_APP_API_KEY;
            const response = await axios.get(`https://api.unsplash.com/photos?client_id=${API_KEY}&per_page=30`);
            console.log(response.data);

            dispatch({ type: 'FETCH_IMAGES_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_IMAGES_FAILURE', payload: error.message });
        }
    };
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            return {
                ...state,
                images: [...state.images, action.payload],
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        case 'FETCH_IMAGES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_IMAGES_SUCCESS':
            return {
                ...state,
                loading: false,
                images: action.payload,
            };
        case 'FETCH_IMAGES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default galleryReducer;
