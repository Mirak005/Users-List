import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

import {
  getUsers,
  editUser,
  addUser,
  deleteUser
} from "../js/actions/userActions";
import UsersList from "../components/UsersList";
import AddUserModal from "../components/Modals/AddUserModal";
import search from "../assets/icons/search.svg";

const HomePage = () => {
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  // const aaddUser = newUser => dispatch(addUser(newUser));
  // const eeditUser = (id, editedUser) => dispatch(editUser(id, editedUser));
  // const ddeleteUser = id => dispatch(deleteUser(id));

  const [searchFilter, setSearch] = useState("");

  //Add a User
  const handleAdd = newUser => dispatch(addUser(newUser));
  // Edit user
  const handleEdit = (id, editedUser) => dispatch(editUser(id, editedUser));

  //handle Delete
  const handleDelete = id => dispatch(deleteUser(id));

  // handle Search
  const handleSearch = e => setSearch(e.target.value);

  // filter users
  const filterUser = arrayOfUsers =>
    arrayOfUsers.filter(({ name, lastName }) => {
      const userInfo = `${name} ${lastName}`;
      return userInfo.toLowerCase().includes(searchFilter.toLowerCase().trim());
    });

  //handleLoading
  const comoponentIsLoading = component =>
    users.isLoading ? (
      <Row className="d-flex justify-content-center mt-5">
        <Spinner animation="grow" />
      </Row>
    ) : (
      component
    );

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
      {comoponentIsLoading(
        <UsersList
          users={filterUser(users.users)}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </Container>
  );
};

export default HomePage;
