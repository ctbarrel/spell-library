import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import UpdateSpell from './UpdateSpell'

function UpdateModal(props) {
    return (
        <Modal className='addmodal'
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>Edit {props.spell.name}</Modal.Header>
            <Modal.Body>
                <UpdateSpell spell={props.spell} />
            </Modal.Body>
        </Modal>
    );
}

export default function UpdateModalButton({spell, refresh}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-dark" onClick={() => {
                setModalShow(true)}}>
                Edit
            </Button>

            <UpdateModal
                show={modalShow}
                spell={spell}
                onHide={() => {
                    setModalShow(false)
                    refresh()
                }}
            />
        </>
    );
}