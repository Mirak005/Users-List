import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";

import UsersList from "./components/UsersList";
import AddUserModal from "./components/AddUserModal";

import search from "./assets/icons/search.svg";
import view from "./assets/icons/view.svg";

import "./App.css";

const listOfUsers = [
  {
    name: "Karim",
    lastName: "gharbi ",
    birthYear: 1993,
    birthLocation: "Tunis",
    id: 0
  },
  {
    name: "Hejer",
    lastName: "Laouani ",
    birthYear: 1993,
    birthLocation: "Tunis",
    id: 1
  }
];

function App() {
  // list Of Users
  const [users, setUser] = useState(listOfUsers);
  //Add a User
  const handleAdd = newUser => setUser([...users, newUser]);

  // Edit user
  const handleEdit = (id, newUser) => {
    const editedUsers = users.map(user => (user.id === id ? newUser : user));
    setUser(editedUsers);
  };

  //handle Delete
  const handleDelete = id => setUser(users.filter(user => user.id !== id));

  //Search by Name
  const [searchFilter, setFilter] = useState("");
  // handle Search
  const handleSearch = e => setFilter(e.target.value);

  // filter users
  const filterUser = arrayOfUsers =>
    arrayOfUsers.filter(({ name, lastName }) => {
      const userInfo = `${name} ${lastName}`;
      return userInfo.toLowerCase().includes(searchFilter.toLowerCase().trim());
    });

  return (
    <Container fluid>
      <Row className="pt-5 pb-4  ">
        <Col className="col-8">
          <h1>Users List </h1>
        </Col>
        <Col className="col-2 align-self-center">
          <InputGroup>
            <InputGroup.Prepend>
              <Image src={search} className="mr-2" />
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
        <Col className="col-1 d-flex  align-self-center">
          <AddUserModal handleAdd={handleAdd} />
        </Col>
      </Row>
      <UsersList
        users={filterUser(users)}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default App;
