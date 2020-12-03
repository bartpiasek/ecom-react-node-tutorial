import data from './data';
import {createStore} from 'redux';
// REDUX - initial state
const initialState = {};
const reducer = (state, action) => {
    return { products: data.products };
};

const store = createStore(reducer, initialState);

export default store;