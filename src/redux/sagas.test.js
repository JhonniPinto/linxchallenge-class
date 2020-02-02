import sagaHelper from 'redux-saga-testing'
import { put, call } from 'redux-saga/effects'

import { loadProducts } from './sagas'
import { loadingProductsSuccess, loadingProductsFailure } from './actions'

describe('src/redux/sagas.js - loadProducts(success)', () => {
    const action = {
        page: 'http://page.com'
    }
    const axios = {
        get: jest.fn()
    }
    const it = sagaHelper(loadProducts(axios)(action))
    it('should call axios.get(page)', (result) => {
        expect(result).toEqual(call(axios.get, action.page))
        return {
            data: {
                products: [{id: 1, name: 'product'}],
                nextPage: 'http://page2.com'
            }
        }
    })
    it('should put loadingProductsSuccess(data)', (result) => {
        expect(result).toEqual(put(loadingProductsSuccess({
            products: [{id: 1, name: 'product'}],
            nextPage: 'http://page2.com'
        })))
    })
})

describe('src/redux/sagas.js - loadProducts(failure)', () => {
    const action = {
        page: 'http://page.com'
    }
    const axios = {
        get: jest.fn()
    }
    const it = sagaHelper(loadProducts(axios)(action))
    it('should call axios.get(page)', (result) => {
        expect(result).toEqual(call(axios.get, action.page))
        return {
            data: {
                products: [],
                nextPage: 'http://page2.com'
            }
        }
    })
    it('should put loadingProductsFailure()', (result) => {
        expect(result).toEqual(put(loadingProductsFailure()))
    })
})