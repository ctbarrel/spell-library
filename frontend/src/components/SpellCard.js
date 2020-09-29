import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import UpdateModalButton from './UpdateModal'
const API_URL = process.env.REACT_APP_API_URL

export default function SpellCard ({spell, refresh}) {
    
    function handleDelete () {
        fetch(`${API_URL}spells/${spell._id}`, {
            method: 'DELETE'
        })
        .then(refresh)
    }

    return (
        <Card className='spellcard' key={spell._id}>
            <span><span className='spellname'>{spell.name}</span> | {spell.school} {spell.level}</span>
            <UpdateModalButton className='deletebutton' spell={spell} refresh={refresh} />
            <Button className='deletebutton' variant='outline-danger' onClick={handleDelete}>X</Button>
        </Card>
    )
}