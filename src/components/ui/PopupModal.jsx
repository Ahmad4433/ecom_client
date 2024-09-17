import React from "react";
import { Modal, ModalHeader } from "react-bootstrap";
const PopupModal = ({ show, onClose, children, title }) => {
  return (
    <Modal centered show={show} onHide={onClose}>
      <ModalHeader closeButton>
        <Modal.Title>{title}</Modal.Title>
      </ModalHeader>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default PopupModal;
