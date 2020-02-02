import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Footer from './index'

Enzyme.configure({ adapter: new Adapter() })

it('mounts', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.text()).toEqual('Testando suas habilidades em HTML, CSS e JS Linx Impulse 2019')
})