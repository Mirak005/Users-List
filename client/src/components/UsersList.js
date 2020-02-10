import React from "react";
import Table from "react-bootstrap/Table";

import UserRaw from "./UserRaw";

function UsersList({ users, handleEdit, handleDelete }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th> </th>
          <th>Name </th>
          <th>Last Name </th>
          <th>Birth Year </th>
          <th>Birth Place</th>
          <th>Actions </th>
        </tr>
      </thead>
      {users.map((user, i) => (
        <UserRaw
          key={i}
          index={i}
          user={user}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Table>
  );
}

export default UsersList;
