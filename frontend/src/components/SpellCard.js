import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default function SpellCard ({spell, refresh}) {
    
    function handleDelete () {
        fetch(`${API_URL}spells/${spell._id}`, {
            method: 'DELETE'
        })
        .then(refresh)
    }

    return (
        <Card className='spellcard'>
            <span><span className='spellname'>{spell.name}</span> | {spell.school} {spell.level}</span>
            <Button className='deletebutton' variant='outline-secondary' onClick={handleDelete}>X</Button>
        </Card>
    )
}