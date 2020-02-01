export function loadingProductsRequest(page) {
    return {
        type: 'LOADING_PRODUCTS_REQUEST',
        page
    }
}

export function loadingProductsSuccess(data) {
    return {
        type: 'LOADING_PRODUCTS_SUCCESS',
        products: data.products,
        nextPage: `https://${data.nextPage}`
    }
}

export function clearFriendData() {
    return {
        type: 'CLEAR_FRIEND_DATA'
    }
} 

export function sendFriendDataSuccess(name) {
    return {
        type: 'SEND_FRIEND_DATA_SUCCESS',
        name
    }
}