import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddSpell from './AddSpell'

function AddSpellModal(props) {
    return (
        <Modal className='addmodal'
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <AddSpell />
            </Modal.Body>
        </Modal>
    );
}

export default function AddSpellModalButton({refresh}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-dark" onClick={() => {
                setModalShow(true)}}>
                Add a Spell
            </Button>

            <AddSpellModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false)
                    refresh()
                }}
            />
        </>
    );
}