import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsView from './ProductsView.jsx';
import ProductReducer from '../reducers/ProductReducer';
import * as ProductActions from '../actions/ProductActions';

class ProductContainer extends React.Component {


    constructor(props) {
        super(props);

        this.props.productActions.getInitialLoadData();
    }

    render() {
        const {productData, productActions, isModalOpen, productListData} = this.props;
        return (
            <div>
                <ProductsView
                productData={productData}
                removeProduct={productActions.removeProductAction}
                isModalOpen={isModalOpen}
                modalViewCallback={productActions.modalViewAction}
                productListData={productListData}
                addProductAction={productActions.addProductAction}
                />
            </div>

        );

    }
}

const mapStateToProps = state => ({
    productData: state.productReducerState.productData,
    isModalOpen: state.productReducerState.isModalOpen,
    productListData: state.productReducerState.productListData
});

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(ProductActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

const productReducers = Object.assign({}, { productReducerState: ProductReducer });

export { productReducers };
