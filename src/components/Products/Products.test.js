import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Products } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('src/components/Products', () => {
    it('mounts', () => {
        const props = {
            products: [],
            isLoading: false,
        }
        
        const wrapper = shallow(<Products {...props} />)
        expect(wrapper.text()).toEqual('Sua seleção especialAinda mais produtos aqui!')
    })
    it('render a product', () => {
        const props = {
            products: [
                {
                    id: 1, image: 'http://image.com',
                    name: 'Product',
                    description: 'Product description',
                    oldPrice: 115,
                    price: 100,
                    installments: {
                        count: 10,
                        value: 10
                    }
                }
            ],
            isLoading: false,
        }
        
        const wrapper = shallow(<Products {...props} />)
        expect(wrapper.text()).toEqual('Sua seleção especial<Product />Ainda mais produtos aqui!')
    })
    it('call more products', () => {
        const props = {
            products: [],
            isLoading: false,
            load: jest.fn()
        }
        
        const wrapper = shallow(<Products {...props} />)
        expect(props.load.mock.calls.length).toEqual(0)
        wrapper.find('.more-products').simulate('click')
        expect(props.load.mock.calls.length).toEqual(1)
    })

})


