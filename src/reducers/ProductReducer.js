import * as actionTypes from '../actions/ActionTypes';
import { removeProduct } from '../selectors/ProductSelector';
const productData = require('./ProductData');
const newProductsData = require('./ProductsList');



const prodReducer = (state = {
    productData: [],
    isModalOpen: false,
    productListData: []

}, action) => {
    const newState = Object.assign({}, state);


    switch (action.type) {

        case actionTypes.INITIAL_LOAD:
            newState.productData = productData.products;
            newState.productListData = newProductsData.products;
            return newState;

        case actionTypes.REMOVE_PRODUCT:
            newState.productData = removeProduct(action.data.id, newState.productData);
            return newState;

        case actionTypes.MODAL_VIEW:
            newState.isModalOpen = action.data.isModalOpen;
            return newState;

        default:
            return state;
    }
};

export default prodReducer;
