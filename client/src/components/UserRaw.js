import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";

import edit from "../assets/icons/edit.svg";
import tick from "../assets/icons/tick.svg";
import gallery from "../assets/icons/gallery.svg";
import remove from "../assets/icons/delete.svg";

function UserRaw({
  user: { name, lastName, birthYear, birthLocation, id },
  handleEdit,
  handleDelete,
  index
}) {

    //check if the user is on edit state to disable the readOnly 
  const [isEdited, setEdit] = useState(false);
  //save the changes in edited User 
  const [editedUser, setEditedUser] = useState({
    name,
    lastName,
    birthLocation,
    birthYear
  });
  // on Click apply the edit
  const handleIsEdited = () => {
      setEdit(!isEdited);
      handleEdit(id, editedUser);
    }
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
              value={isEdited ? editedUser.name : name}
              name={"name"}
              onChange={handelChange}
            />
          </td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.lastName : lastName}
              name={"lastName"}
              onChange={handelChange}
            />
          </td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.birthYear : birthYear}
              name={"birthYear"}
              onChange={handelChange}
            />
          </td>
          <td>
            <FormControl
              readOnly={!isEdited}
              bsPrefix={isEdited ? "edited-active" : "user-info"}
              value={isEdited ? editedUser.birthLocation : birthLocation}
              name={"birthLocation"}
              onChange={handelChange}
            />
          </td>
          <td>
            <Image className=" mr-3" as="input" type="submit" src={gallery} />
            <Image
              className="ml-3 mr-2"
              as="input"
              type="submit"
              src={isEdited ? tick : edit}
              onClick={ handleIsEdited}
            />
            <Image
              className="ml-2 mr-2"
              as="input"
              type="submit"
              src={remove}
              onClick={()=>  handleDelete(id)}

            />
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default UserRaw;
