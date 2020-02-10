import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddPhotoModal({ addPhoto, user }) {
  //handle Modal
  const [show, setShow] = useState(false);

  const handeShow = () => setShow(!show);
  //save the changes input
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    path: ""
  });
  //handleChanges
  const handelChange = e => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };
  //handleAdd
  const addNewPhoto = () => {
    if (Object.values(newPhoto).indexOf("") === -1) {
      setShow(false);
      addPhoto(user, newPhoto);
      setNewPhoto({
        title: "",
        path: ""
      });
    } else alert("Plese enter Require Feilds");
  };

  return (
    <>
      <Button size={"sm"} variant="dark" onClick={handeShow}>
        +
      </Button>

      <Modal show={show} onHide={handeShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Photo </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={handelChange}
              type="text"
              className="mb-3"
              name="title"
              placeholder="Title ..."
              maxLength="16"
            />
            <Form.Label>Path</Form.Label>
            <Form.Control
              onChange={handelChange}
              type="text"
              className="mb-3"
              name="path"
              placeholder="path ..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handeShow}>
              Close
            </Button>
            <Button variant="primary" onClick={addNewPhoto}>
              Add Photo
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddPhotoModal;
