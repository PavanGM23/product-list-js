import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import ProductContainer from './ProductContainer';
import { productReducers } from './ProductContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ ...productReducers }),
    compose(applyMiddleware(sagaMiddleware)),
  );

class ProductApp extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <ProductContainer />
            </Provider>
        );
    }
}

export default ProductApp