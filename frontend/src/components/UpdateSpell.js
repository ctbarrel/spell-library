import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default class UpdateSpell extends Component {

    constructor(props) {
        super(props)

        const { spell } = props

        this.state = {
            name: spell.name,
            school: spell.school,
            level: spell.level,
            casting: spell.casting,
            range: spell.range,
            duration: spell.duration,
            components: spell.components,
            description: spell.description
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleDelete = () => {
        fetch(`${API_URL}spells/${this.props.spell._id}`, {
            method: 'DELETE'
        })
            .then(this.props.setShow)
            .then(this.props.refresh)
    }

    handleSelectSchool = (value) => {
        this.setState({ school: value })
    }
    handleSelectCasting = (value) => {
        this.setState({casting: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(`${API_URL}spells/${this.props.spell._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(this.props.setShow)
            .then(this.props.refresh)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='input-form'>
                <span className='input-name'>
                    <label htmlFor='name'>Spell Name</label>
                    <input name='name'
                        value={this.state.name}
                        type='text'
                        onChange={this.handleChange} />
                </span>

                <span className='input-school'>
                    <label htmlFor='school'>School of Magic</label>
                    <select value={this.state.school}
                        onChange={({ target }) => this.handleSelectSchool(target.value)}>
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

                <span className='input-level'>
                    <label htmlFor='level'>Spell Level</label>
                    <input name='level'
                        value={this.state.level}
                        type='number'
                        onChange={this.handleChange}
                        max='9' />
                </span>

                <span className='oneline casting'>
                    <label htmlFor='casting'>Casting Time</label>
                    <select value={this.state.casting}
                        onChange={({ target }) => this.handleSelectCasting(target.value)}>
                        <option disable value=''>Choose Casting Time</option>
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
                    onClick={this.handleSubmit}>Update the Spell</Button>
                <Button className='deletebutton' variant='outline-danger' onClick={this.handleDelete}>Remove Spell</Button>
            </form>
        )
    }
}