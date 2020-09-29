import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default class AddSpell extends Component {

    constructor(props) {

        super(props)
        this.state = {
            name: '',
            school: 'Abjuration',
            level: 0
        }
    }

    handleChange = ({target}) => {
        let value 
        value = target.type === 'number' ? parseInt(value) : value
        this.setState({[target.name]: target.value})
    }
    
    handleSelectSchool = (value) => {
        this.setState({school: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(`${API_URL}spells`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.refresh)
        .then(() => this.setState({
            name: '',
            school: 'Abjuration',
            level: 0
        }))

        
    }   

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span className='input-name'>
                <label for='name'>Spell Name</label> 
                <input name='name'
                value={this.state.name}
                type='text'
                onChange={this.handleChange} />
                </span>

                <span className='input-school'>
                <label for='school'>School of Magic</label>
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
                <label for='level'>Spell Level</label>
                <input name='level'
                value={this.state.level}
                type='number' 
                onChange={this.handleChange} />
                </span>

                <Button variant="outline-dark"
                onClick={this.handleSubmit}>Add a Spell</Button>
            </form>
        )
    }
}