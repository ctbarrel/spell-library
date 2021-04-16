import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import SpellCard from './SpellCard'
import AddSpellModal from './AddSpellModal'

const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    state = { spells: [], viewport: 'all'}
    
    refresh = () => {
        fetch(`${API_URL}spells`)
            .then(response => response.json())
            .then(spells => this.setState({spells}))
    }

    handleViewport = (levelView) => {
        this.setState({ viewport: levelView})
        this.refresh()
        // console.log('Viewport: ' + this.state.viewport)
    }

    componentDidMount() {
        this.refresh()
    }


    render() {

        let bubbleSort = () => {
            
            var spellArray = this.state.spells.map((x) => x)

            for (let loopCount=0; loopCount < spellArray.length; loopCount++) {
                for (let pairStart=0; pairStart < spellArray.length-1-loopCount; pairStart++) {
                    if (spellArray[pairStart+1].name.toLowerCase() < spellArray[pairStart].name.toLowerCase()) {
                        [spellArray[pairStart + 1], spellArray[pairStart]] = [spellArray[pairStart], spellArray[pairStart + 1]]
                    }
                }
            }

            return spellArray
        }

        let displaySpells = bubbleSort().map(
            spell => {
                if (this.state.viewport === 'all' || this.state.viewport === spell.level.toString()) {
                    return (
                        <SpellCard spell={spell}
                            key={spell._id}
                            refresh={this.refresh} />
                    )
                }
            }
        )

        return (
            <div>
                <h1>Spell Library</h1>
                <span>View Spells by Level: </span>
                <br />
                <ButtonGroup aria-label="level-view" className="level-view">
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('all')}>All</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('0')}>0</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('1')}>1</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('2')}>2</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('3')}>3</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('4')}>4</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('5')}>5</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('6')}>6</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('7')}>7</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('8')}>8</Button>
                    <Button variant="outline-secondary" onClick={() => this.handleViewport('9')}>9</Button>
                </ButtonGroup><br />
                {displaySpells}<br />
                <AddSpellModal refresh={this.refresh} />
            </div>
        )
    }
}