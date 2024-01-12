import React from "react";
import Modal from "react-bootstrap/Modal";

const AppModal = (props) => {
  const { header, show, handleClose, children } = props;
  if (!show) {
    return null;
  }
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default AppModal;
