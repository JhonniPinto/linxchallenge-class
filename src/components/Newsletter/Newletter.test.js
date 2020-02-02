import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Newsletter } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('src/components/Newsletter', () => {
    it('mounts', () => {
        const props = {
            sendData: jest.fn()
        }
        const wrapper = shallow(<Newsletter {...props} />)
        expect(wrapper.text())
            .toEqual('Compartilhe a novidadeQuer que seus amigos também ganhem a lista personalizada deles? Preencha agora!Nome do seu amigo:E-mail:Enviar agora')
    })
    it('mounts with success feedback', () => {
        const props = {
            name: 'Jhonni'
        }
        const wrapper = shallow(<Newsletter {...props} />)
        expect(wrapper.text())
            .toEqual('Compartilhe a novidadeQuer que seus amigos também ganhem a lista personalizada deles? Preencha agora!Nome do seu amigo:E-mail:Novidades compartilhadas com Jhonni.Enviar agora')
    })
})