import React from 'react'
import Card from 'react-bootstrap/Card'
import UpdateModalButton from './UpdateModal'

export default function SpellCard ({spell, refresh}) {

    return (
        <Card className='spellcard' key={spell._id}>
            <span><span className='spellname'>{spell.name}</span> | {spell.school} {spell.level}</span>
            <UpdateModalButton className='deletebutton' spell={spell} refresh={refresh} />
        </Card>
    )
}