import Axios from 'axios';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
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
    } catch(erorr) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message
        });
    }
};