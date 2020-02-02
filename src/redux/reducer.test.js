import reducer from './reducer'

describe('src/redux/reducer.js', () => {
    it('action.type = LOADING_PRODUCTS_REQUEST', () => {
        const initialState = { isLoading: false }
        const result = reducer({}, {type: 'LOADING_PRODUCTS_REQUEST'})
        expect(result).toEqual({
            isLoading: true
        })
    })

    it('action.type = LOADING_PRODUCTS_SUCCESS', () => {
        const action = {
            type: 'LOADING_PRODUCTS_SUCCESS',
            products: []
        }
        const initialState = {
            products: []
        }
        const result = reducer(initialState, action)
        expect(result).toEqual({
            isLoading: false,
            products: []
        })
    })

    it('action.type = LOADING_PRODUCTS_FAILURE', () => {
        const action = {
            type: 'LOADING_PRODUCTS_FAILURE'
        }
        const initialState = {
            err: false
        }
        const result = reducer(initialState, action)
        expect(result).toEqual({
            err: true
        })
    })

    it('action.type = SEND_FRIEND_DATA_SUCCESS', () => {
        const action = {
            type: 'SEND_FRIEND_DATA_SUCCESS',
            name: 'name'
        }
        const initialState = {
            name: ''
        }
        const result = reducer(initialState, action)
        expect(result).toEqual({
            name: 'name'
        })
    })

    it('action.type = CLEAR_FRIEND_DATA', () => {
        const action = {
            type: 'CLEAR_FRIEND_DATA'
        }
        const initialState = {
            name: 'name'
        }
        const result = reducer(initialState, action)
        expect(result).toEqual({
            name: ''
        })
    })
})
