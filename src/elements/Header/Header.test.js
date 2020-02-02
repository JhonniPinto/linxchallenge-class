import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from './index'

Enzyme.configure({ adapter: new Adapter() })

it('mounts', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toEqual('uma seleção de produtosespecial para vocêTodos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!Conheça a LinxAjude o algoritmoSeus produtosCompartilhe')
})