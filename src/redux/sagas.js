import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { loadingProductsRequest, loadingProductsSuccess, loadingProductsFailure } from './actions'

export const loadProducts = (axios) => function *({page}) {
    const { data } = yield call(axios.get, page)
    if (data.products.length > 0) yield put(loadingProductsSuccess(data))
    else yield put(loadingProductsFailure())
}

function *index() {
    const firstPage = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'

    yield takeLatest('LOADING_PRODUCTS_REQUEST', loadProducts(axios))
    yield put(loadingProductsRequest(firstPage))
}

export default index