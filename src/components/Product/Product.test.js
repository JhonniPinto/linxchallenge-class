import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Product from './index'

Enzyme.configure({ adapter: new Adapter() })

it('mounts', () => {
    const props = {
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
    const wrapper = shallow(<Product {...props} />)
    expect(wrapper.text()).toEqual('ProductProduct descriptionDe: R$115Por: R$100ou: x de R$Comprar')
})