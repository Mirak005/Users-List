import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";

import edit from "../assets/icons/edit.svg";
import tick from "../assets/icons/tick.svg";
import gallery from "../assets/icons/gallery.svg";
import remove from "../assets/icons/delete.svg";

function UserRaw({ user, handleEdit, handleDelete, index }) {
  //check if the user is on edit state to disable the readOnly
  const [isEdited, setEdit] = useState(false);
  //save the changes in edited User
  const [editedUser, setEditedUser] = useState(user);
  // on check validation and apply the edit
  const handleIsEdited = () => {
    if (
      editedUser.birthYear < 1900 &&
      editedUser.birthYear.toString().length !== 4
    ) {
      alert("enter a valid Year of Birth ");
      setEditedUser(user);
      setEdit(!isEdited);
    } else if (
      Object.values(editedUser)
        .map(el => el ? el.trim() : el )
        .indexOf("") === -1
    ) {
      return handleEdit(user._id, editedUser, setEdit(!isEdited));
    } else {
      alert("Invalid ");
      setEditedUser(user);
      setEdit(!isEdited);
    }
  };
  //handleChanges
  const handelChange = e => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  return (
    <>
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.name : user.name}
              name={"name"}
              onChange={handelChange}
            />
          </td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.lastName : user.lastName}
              name={"lastName"}
              onChange={handelChange}
            />
          </td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.birthYear : user.birthYear}
              name={"birthYear"}
              onChange={handelChange}
            />
          </td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.birthLocation : user.birthLocation}
              name={"birthLocation"}
              onChange={handelChange}
            />
          </td>
          <td>
            <Link to={`/${user.name} ${user.lastName}/${user._id}`}>
              {" "}
              <Image className=" mr-3" as="input" type="submit" src={gallery} />
            </Link>
            <Image
              className="ml-3 mr-2"
              as="input"
              type="submit"
              src={isEdited ? tick : edit}
              onClick={() => (isEdited ? handleIsEdited() : setEdit(!isEdited))}
            />
            <Image
              className="ml-2 mr-2"
              as="input"
              type="submit"
              src={remove}
              onClick={() => handleDelete(user._id)}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default UserRaw;
