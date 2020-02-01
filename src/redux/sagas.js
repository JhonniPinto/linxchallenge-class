import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { loadingProductsRequest, loadingProductsSuccess } from './actions'

function *loadProducts({page}) {
    const { data } = yield call(axios.get, page)
    yield put(loadingProductsSuccess(data))
}

function *index() {
    const firstPage = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'

    yield takeLatest('LOADING_PRODUCTS_REQUEST', loadProducts)
    yield put(loadingProductsRequest(firstPage))
}

export default index