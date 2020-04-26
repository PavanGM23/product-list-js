import * as actionTypes from './ActionTypes';


export function getInitialLoadData(){
    return {
        type: actionTypes.INITIAL_LOAD
    };
}

export function removeProductAction(id){
    return {
        type: actionTypes.REMOVE_PRODUCT,
        data:{
            id
        }
    }
}

export function modalViewAction(isModalOpen){
    return {
        type: actionTypes.MODAL_VIEW,
        data:{
            isModalOpen
        }
    }
}
