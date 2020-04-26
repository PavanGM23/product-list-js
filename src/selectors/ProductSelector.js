import _ from 'lodash';

export const removeProduct = (productId, productList) => {
  const tempDataArray = Object.assign([], productList);

  const productIndex = _.findIndex(tempDataArray, { productId });

  tempDataArray.splice(productIndex, 1);

  return tempDataArray;
};


export const addProduct = (products, addedProducts, productList) => {
  const tempDataArray = Object.assign([], addedProducts);


  products.map((product) => {

    let id = product.id;

    let index = _.findIndex(productList, { id });

      tempDataArray.push(productList[index]);

      return tempDataArray;

  })

  return tempDataArray;
};




export const removeProductFromModal = (products, productList) => {
  const tempDataArray = Object.assign([], productList);

  products.map((product) => {

    let id = product.id;

    let index =  _.findIndex(tempDataArray, { id });

    tempDataArray.splice(productList[index],1);

  })

  return tempDataArray;
};




