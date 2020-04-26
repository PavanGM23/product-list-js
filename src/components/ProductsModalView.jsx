import React from 'react';
import Modal from 'react-modal';
import './style.css';


class ProductsModalView extends React.Component {


    constructor(props) {
        super(props);

        this.productSelected = this.productSelected.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.products = [];
    }

    productSelected(event) {

        let isChecked = event.target.checked;

        if (isChecked) {

            this.products.push({ id: event.target.id });
        }

    }

    addProduct() {

        this.props.addProductAction(this.products);
        this.props.closeModal();

        this.products = [];

    }


    render() {

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        const { isModalOpen, productListData, closeModal } = this.props;

        return (
            <div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Add Product"
                >
                    <div className="modalDiv">
                        <table class="table table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">IsSelected</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productListData.map(product => (
                                        <> < tr >
                                            <td>{product.name}</td>
                                            <td><input type="checkbox" id={product.id} onClick={this.productSelected} /></td>
                                        </tr></>

                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <tr>
                            <td>
                                <button className="btn btn-primary" onClick={this.addProduct}>Add</button>
                            </td>
                            <td>
                                <button className="btn btn-primary pull-right" onClick={closeModal} >Cancel</button>
                            </td>
                        </tr>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ProductsModalView;