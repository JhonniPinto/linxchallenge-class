import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Loading from './index'

Enzyme.configure({ adapter: new Adapter() })

it('mounts', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.length).toEqual(1)
})