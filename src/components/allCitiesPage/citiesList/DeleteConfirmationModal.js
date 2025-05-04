
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * DeleteConfirmationModal displays a modal dialog asking the user to confirm deletion of a city.
 *
 * @param {Object} props
 * @param {boolean} props.show - Whether the modal is visible.
 * @param {string} props.cityName - Name of the city to show in the confirmation message.
 * @param {function} props.onClose - Callback to close the modal without deleting.
 * @param {function} props.onConfirm - Callback to confirm and proceed with deletion.
 * @returns {JSX.Element} The modal confirmation dialog.
 * @constructor
 */
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