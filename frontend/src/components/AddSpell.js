import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default class AddSpell extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            school: '',
            level: 0,
            casting: '',
            range: '',
            duration: '',
            components: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSelectSchool = (value) => {
        this.setState({ school: value })
    }
    handleSelectCasting = (value) => {
        this.setState({ casting: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(this.state.casting !== '') {
            if(this.state.school !== '') {
        
        fetch(`${API_URL}spells`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then()
            .then(this.props.refresh)
            .then(() => this.setState({
                name: '',
                school: '',
                level: 0,
                casting: '',
                range: '',
                duration: '',
                components: ''
            }))
        }}

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='input-form'>
                <span className='oneline name'>
                    <label htmlFor='name'>Spell Name</label>
                    <input name='name'
                        value={this.state.name}
                        type='text'
                        onChange={this.handleChange} />
                </span>

                <span className='school'>
                    <label htmlFor='school'>School of Magic</label>
                    <select value={this.state.school}
                        onChange={({ target }) => this.handleSelectSchool(target.value)}>
                        <option disabled value=''>Choose One</option>
                        <option value='Abjuration'>Abjuration</option>
                        <option value='Conjuration'>Conjuration</option>
                        <option value='Divination'>Divination</option>
                        <option value='Enchantment'>Enchantment</option>
                        <option value='Evocation'>Evocation</option>
                        <option value='Illusion'>Illusion</option>
                        <option value='Necromancy'>Necromancy</option>
                        <option value='Transmutation'>Transmutation</option>
                    </select>
                </span>

                <span className='level'>
                    <label htmlFor='level'>Spell Level</label>
                    <input name='level'
                        value={this.state.level}
                        type='number'
                        onChange={this.handleChange}
                        max='9'
                        min='0' />
                </span>

                <span className='oneline casting'>
                    <label htmlFor='casting'>Casting Time</label>
                    <select value={this.state.casting}
                        onChange={({ target }) => this.handleSelectCasting(target.value)}>
                        <option disabled value=''>Choose One</option>
                        <option value='1 Action'>1 Action</option>
                        <option value='1 Bonus Action'>1 Bonus Action</option>
                        <option value='1 Reaction'>1 Reaction</option>
                        <option value='1 Minute'>1 Minute</option>
                        <option value='10 Minutes'>10 Minutes</option>
                        <option value='1 Hour'>1 Hour</option>
                        <option value='8 Hours'>8 Hours</option>
                        <option value='12 Hours'>12 Hours</option>
                        <option value='24 Hours'>24 Hours</option>
                    </select>
                </span>

                <span className='oneline range'>
                    <label htmlFor='range'>Range</label>
                    <input name='range'
                        value={this.state.range}
                        type='text'
                        onChange={this.handleChange} />
                </span>

                <span className='oneline duration'>
                    <label htmlFor='duration'>Duration</label>
                    <input name='duration'
                        value={this.state.duration}
                        type='text'
                        onChange={this.handleChange} />
                </span>

                <span className='oneline components'>
                    <label htmlFor='components'>Components</label>
                    <input name='components'
                        value={this.state.components}
                        type='text'
                        onChange={this.handleChange} />
                </span>

                <span className='oneline description'>
                    <label htmlFor='description'>Description</label>
                    <input name='description'
                        value={this.state.description}
                        type='text'
                        onChange={this.handleChange} />
                </span>

                <Button variant="outline-dark"
                    onClick={this.handleSubmit}>Add a Spell</Button>
            </form>
        )
    }
}