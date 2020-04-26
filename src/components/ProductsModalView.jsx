import React from 'react';
import Modal from 'react-modal';
import './style.css';


class ProductsModalView extends React.Component {

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
        <div className="modalDiv">
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
                                        {/* <th scope="row">{product.id}</th> */}
                                        <td>{product.name}</td>
                                        <td><input type="checkbox" id="vehicle1" /></td>
                                    </tr></>

                                ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <tr>
                        <td>
                        <button className="btn btn-primary">Add</button>
                        </td>
                        <td>
                        <button className="btn btn-primary" onClick={closeModal} >Cancel</button>
                        </td>
                    </tr>
                </div>
            </Modal>
        </div>
    );
}
}

export default ProductsModalView;