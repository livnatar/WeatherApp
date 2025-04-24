
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmationModal = ({ show, cityName, onClose, onConfirm }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete {cityName}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmationModal;