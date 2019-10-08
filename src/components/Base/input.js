import React, { Fragment, Component } from 'react'
import styled from "styled-components"
import { useField } from 'react-final-form'

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
        this.props.onChange(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <Fragment>
                <Wrapper>
                <Label>{this.props.label}</Label>
                <PureInput
                    onChange={this.handleChange}
                    type={this.props.type} 
                    name={this.props.name} 
                    value={this.state.value}
                    placeholder={this.props.placeholder}>
                </PureInput>
                { this.props.error && (<p>{ this.props.error }</p>)}
                </Wrapper>
            </Fragment>
        )
    }
}


export default Input

export const FormInput = ({ name, validate, onChange: _onChange, value: _value, ...props }) => {
    const { input, meta } = useField(name, {
        validate
    })

    const { onChange, value, onBlur } = input 

    const error = meta.error || meta.submitError
    return <Input error={error} onChange={onChange} value={value} onBlur={onBlur} {...props} />
}


const PureInput = styled.input`
    background: #fff;
    border: 0px;
    border-radius: 4px;
    color: #1F3A60;
    font-size: 14px;
    width: 100%;
    height: 47px;
    padding: 0px 20px;
    -webkit-box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.16);
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.16);

    &:active {
        outline: 0;
    }
    &:focus {
        outline: 0;
    }

    &::placeholder {
        color: #B4BECE;
    }


`

export const Label = styled.label`
    color: #1F3A60;
    font-size: 14px;
`
export const Wrapper = styled.div`
    margin-bottom: 10px;
`
