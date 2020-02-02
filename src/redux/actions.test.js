import { 
    loadingProductsRequest,
    loadingProductsSuccess,
    loadingProductsFailure,
    clearFriendData,
    sendFriendDataSuccess
} from './actions'

test('src/redux/actions.js - loadingProductsRequest', () => {
    const result = loadingProductsRequest('page')
    expect(result).toEqual({
        type: 'LOADING_PRODUCTS_REQUEST',
        page: 'page'
    })
})

test('src/redux/actions.js - loadingProductsSuccess', () => {
    const result = loadingProductsSuccess({products: [], nextPage: 'next'})
    expect(result).toEqual({
        type: 'LOADING_PRODUCTS_SUCCESS',
        products: [],
        nextPage: 'https://next'
    })
})

test('src/redux/actions.js - loadingProductsFailure', () => {
    const result = loadingProductsFailure()
    expect(result).toEqual({
        type: 'LOADING_PRODUCTS_FAILURE'
    })
})

test('src/redux/actions.js - clearFriendData', () => {
    const result = clearFriendData()
    expect(result).toEqual({
        type: 'CLEAR_FRIEND_DATA'
    })
})

test('src/redux/actions.js - sendFriendDataSuccess', () => {
    const result = sendFriendDataSuccess('name')
    expect(result).toEqual({
        type: 'SEND_FRIEND_DATA_SUCCESS',
        name: 'name'
    })
})