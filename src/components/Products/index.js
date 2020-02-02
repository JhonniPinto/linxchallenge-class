import React from 'react'
import { connect } from 'react-redux'
import './Products.css'

import Product from '../Product'
import Loading from '../Loading'

import { loadingProductsRequest } from '../../redux/actions'

import fixValue from './utils/fixValue'

export function Products({ products, isLoading, nextPage, err, load }) {
    function moreProducts() {
        load(nextPage)
    }
    
    return <section className='products-container'>
        <h3 className='products-header'>Sua seleção especial</h3>
        <div className='products'>
            { products.map(product => {
                return <Product key={product.id}
                    image={product.image}
                    name={product.name} 
                    description={product.description}
                    oldPrice={fixValue(product.oldPrice)}
                    price={fixValue(product.price)}
                    count={product.installments.count}
                    value={fixValue(product.installments.value)}
                />
            }) }
        </div>
        {isLoading ? (
            <Loading />
        ) : (
            <span>
                <small className='load-products-error'>{err && 'Erro ao carregar os produtos!'}</small>
                <button onClick={moreProducts} className='more-products'>Ainda mais produtos aqui!</button>
            </span>
        )}
    </section> 
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        products: state.products,
        nextPage: state.nextPage,
        err: state.err
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: (page) => dispatch(loadingProductsRequest(page)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)