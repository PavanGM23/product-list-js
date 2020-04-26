import React from 'react';
import ProductsModalView from './ProductsModalView';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductsView extends React.Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.props.modalViewCallback(true);
    }


    closeModal() {
        this.props.modalViewCallback(false);
    }


    handleDelete(event) {
        event.preventDefault();
        this.props.removeProduct(event.currentTarget.attributes.value.value);
    }

    render() {
        const { productData, isModalOpen, productListData } = this.props;
        return (
            <div>
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Quality</th>
                            <th scope="col">Delete</th>
                            <th scope="col"><input type="submit" value='ADD' onClick={this.openModal} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData.map(product => (
                                <> < tr >
                                    <th scope="row">{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.rate}</td>
                                    <td>{product.quality}</td>
                                    <td value={product.id} onClick={this.handleDelete}>Delete</td>
                                </tr></>

                            ))}
                    </tbody>
                </table>
                <ProductsModalView
                    isModalOpen={isModalOpen}
                    productListData={productListData}
                    closeModal={this.closeModal}
                />

            </div>
        );
    }
}

export default ProductsView