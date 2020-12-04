import Axios from 'axios';
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
// REDUX ACTION
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    // take data from backend
    try {
        const { data } = await Axios.get('/api/products');
        // based on state - update homescreen
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message
        });
    }
};

export const detailsProduct = (productId) => async(dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    try {
        const {data} = Axios.get(`/api/products/${productId}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    }
};