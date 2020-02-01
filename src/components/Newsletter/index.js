import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Newsletter.css'

import { sendFriendDataSuccess, clearFriendData } from '../../redux/actions'

import validateForm from './utils/validateForm'

class Newsletter extends Component {
    state = {
        form: {
            name: '',
            email: ''
        },
        err: []
    }

    settingForm = field => e => {
        const form = this.state.form
        form[field] = e.target.value
        this.setState({form})
    }

    submitForm = () => {
        const fieldErr = validateForm(this.state.form)
        if (fieldErr.length === 0) {
            this.props.sendData(this.state.form.name)
            setTimeout(() => {
                this.props.clearData()
                this.setState({
                    err: fieldErr, 
                    form: {name: '', email: ''}
                })
            }, 2000)
        }
        this.setState({err: fieldErr})
    }

    render() {
        const { name } = this.props

        return <section className='newsletter-container'>
            <h4 className='news-header'>Compartilhe a novidade</h4>
            <p className='paragraph'>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <form className='form'>
                <div className='forms-control'>
                    <div className='form-control'>
                        <label>Nome do seu amigo:</label>
                        <input value={this.state.form.name} onChange={this.settingForm('name')} type='text' />
                        <small className='newsletter-form-feedback'>
                            { this.state.err.indexOf('name') >= 0 && 
                                'Preencher com, no mínimo, 2 caracteres.' 
                            }
                        </small> 
                    </div>
                    <div className='form-control'>
                        <label>E-mail:</label>
                        <input value={this.state.form.email} onChange={this.settingForm('email')} type='email' />
                        <small className='newsletter-form-feedback'>
                            { this.state.err.indexOf('email') >= 0 && 
                                'Preencher com formato de e-mail padrão.' 
                            }
                        </small> 
                    </div>
                </div>
                <small className='newsletter-post-feedback'>
                    {name && `Novidades compartilhadas com ${name}.`}
                </small>
                <button onClick={this.submitForm} type='button'>Enviar agora</button>
            </form>
        </section>
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendData: (name) => dispatch(sendFriendDataSuccess(name)),
        clearData: () => dispatch(clearFriendData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter)