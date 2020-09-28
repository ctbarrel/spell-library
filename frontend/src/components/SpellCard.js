import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// const API_URL = process.env.REACT_APP_API_URL

export default function SpellCard ({spell}) {
    
    return (
        <Card className='spellcard'>
            <span><span className='spellname'>{spell.name}</span> | {spell.school} {spell.level}</span>
        </Card>
    )
}