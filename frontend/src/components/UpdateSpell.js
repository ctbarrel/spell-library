import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default class UpdateSpell extends Component {

    constructor(props) {
        super(props)

        const {spell} = props

        this.state = {
            name: spell.name,
            school: spell.school,
            level: spell.level
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }
    
    handleSelectSchool = (value) => {
        this.setState({school: value})
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
        .then(this.props.refresh)
        .then(this.props.close)
    }   

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                onChange={({target}) => this.handleSelectSchool(target.value)}>
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

                <Button variant="outline-dark"
                onClick={this.handleSubmit}>Update the Spell</Button>
            </form>
        )
    }
}