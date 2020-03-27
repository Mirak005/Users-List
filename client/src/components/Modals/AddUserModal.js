import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddUserModal({ handleAdd }) {
  //handle Modal
  const [show, setShow] = useState(false);

  const handeShow = () => setShow(!show);
  //save the changes in edited User
  const [editedUser, setEditedUser] = useState({
    name: "",
    lastName: "",
    birthLocation: "",
    birthYear: ""
  });
  //handleChanges
  const handelChange = e => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  //handleAdd
  const addUser = () => {
    //check valid birth Year
    if (
      editedUser.birthYear < 1900 &&
      editedUser.birthYear.toString().length !== 4
    )
      return alert("enter a valid Year of Birth ");
    else if (
      Object.values(editedUser)
        .map(el => (el ? el.trim() : el))
        .indexOf("") === -1
    ) {
      handleAdd(editedUser);
      setShow(false);
      setEditedUser({
        name: "",
        lastName: "",
        birthLocation: "",
        birthYear: ""
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
          <Modal.Title>Add New User </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handelChange}
              type="text"
              className="mb-3"
              name="name"
              placeholder="Name ..."
              maxLength="16"
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handelChange}
              type="text"
              className="mb-3"
              name="lastName"
              placeholder="Last Name ..."
              maxLength="16"
            />
            <Form.Label>Year Of Birth</Form.Label>
            <Form.Control
              onChange={handelChange}
              type="number"
              className="mb-3"
              name="birthYear"
              placeholder="Year of Birth ..."
              min="1800"
            />
            <Form.Label>Birth Place</Form.Label>
            <Form.Control
              onChange={handelChange}
              type="text"
              className="mb-3"
              name="birthLocation"
              placeholder="Birth Place ..."
              maxLength="16"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handeShow}>
              Close
            </Button>
            <Button variant="primary" onClick={addUser}>
              Add User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddUserModal;
