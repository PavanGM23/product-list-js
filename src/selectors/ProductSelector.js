import _ from 'lodash';

export const removeProduct = (productId, productList) => {
    const tempDataArray = Object.assign([], productList);
  
    const productIndex = _.findIndex(tempDataArray, { productId });

    tempDataArray.splice(productIndex, 1);
    
    return tempDataArray;
  };