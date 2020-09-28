import React, {Component} from 'react'
// import Button from 'react-bootstrap/Button'
import SpellCard from './SpellCard'

const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    state = {spells: []}

    refresh = () => {
        fetch(`${API_URL}spells`)
        .then(response => response.json())
        .then(spells => this.setState({spells}))
    }

    componentDidMount(){
        this.refresh()
    }
    
    render() {
        
        const displaySpells = this.state.spells.map(spell =>
            <SpellCard spell={spell}
            key={spell._id}
            refresh={this.refresh} />)

        return (
        <div>
            <h1>Spell Library</h1>
            {displaySpells}
        </div>
    )}
}