import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

import UpdateModalButton from './UpdateModal'

export default function SpellCard({ spell, refresh }) {

    const [open, setOpen] = useState(false)

    let collapseid = `collapse${spell._id}`

    return (
        <Card className='spellcard' key={spell._id}>
            {/* <span><span className='spellname'>{spell.name}</span> | {spell.school} {spell.level}</span> */}
            <Card.Header className='card-head'>
                <span className='card-name'>{spell.name}</span>
                <Button onClick={() => setOpen(!open)}
                    aria-controls={collapseid}
                    aria-expanded={open}
                    variant='outline-dark'>View</Button>
                <UpdateModalButton className='deletebutton' spell={spell} refresh={refresh} />
            </Card.Header>
            <Collapse in={open}>
                <Card.Body id={collapseid} className='card-body'>
                    <div className='card-sub'>{spell.school} {spell.level}</div>
                    <div>Casting Time: {spell.casting} </div>
                    <div>Range: {spell.range}</div>
                    <div>Duration: {spell.duration}</div>
                    <div>Components: {spell.components}</div>
                    <div>{spell.description}</div>
                </Card.Body>
            </Collapse>
        </Card>
    )
}