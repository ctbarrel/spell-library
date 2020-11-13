import React, { Component } from 'react'

const API_URL = process.env.REACT_APP_API_URL

export default class RitualToggle extends Component {

    constructor(props) {
        super(props)

        const {spell} = this.props
        const isRitual = spell.hasOwnProperty('ritual') ? spell.ritual : false

        this.state = {
            ritual: isRitual
        }
    }

    handleChange = ({ target }) => {
        this.setState({ ritual: target.checked }, this.handleUpdate)
    }

    handleUpdate(prevProps) {
        fetch(`${API_URL}spells/${this.props.spell._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    render() {
        return (
            <div className='toggleRitual'>
                <label htmlFor='ritualBox'>Ritual</label>
                <input 
                    type='checkbox'
                    onChange={this.handleChange}
                    checked={this.state.ritual}
                    id='ritualBox'
                    name='ritualBox'
                />
            </div>
        )
    }
}