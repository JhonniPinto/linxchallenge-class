const INITIAL_STATE = {
    isLoading: false,
    products: [],
    err: false,
    nextPage: '',
    name: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOADING_PRODUCTS_REQUEST':
            return {...state, isLoading: true}
        case 'LOADING_PRODUCTS_SUCCESS':
            const products = [...state.products, ...action.products]
            return {...state, isLoading: false, products, nextPage: action.nextPage}
        case 'LOADING_PRODUCTS_FAILURE':
            return {...state, err: true}
        case 'SEND_FRIEND_DATA_SUCCESS':
            return {...state, name: action.name}
        case 'CLEAR_FRIEND_DATA':
            return {...state, name: ''}

        default:
            return state;
    }
}