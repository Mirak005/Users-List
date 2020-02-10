import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";

import {
  getUsers,
  editUser,
  addUser,
  deleteUser
} from "../js/actions/userActions";
import UsersList from "./UsersList";
import AddUserModal from "./AddUserModal";
import search from "../assets/icons/search.svg";
import view from "../assets/icons/view.svg";



class HomePage extends Component {
  state = {
    users: [],
    searchFilter: ""
  };

  //Add a User
  handleAdd = newUser => this.props.addUser(newUser);
  // Edit user
  handleEdit = (id, newUser) => this.props.editUser(id, newUser);

  //handle Delete
  handleDelete = id => this.props.deleteUser(id);

  // handle Search
  handleSearch = e => this.setState({ searchFilter: e.target.value });

  // filter users
  filterUser = arrayOfUsers =>
    arrayOfUsers.filter(({ name, lastName }) => {
      const userInfo = `${name} ${lastName}`;
      return userInfo
        .toLowerCase()
        .includes(this.state.searchFilter.toLowerCase().trim());
    });

  render() {
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
                onChange={this.handleSearch}
              />
            </InputGroup>
          </Col>
          <Col className="col-1 d-flex  align-self-center">
            <AddUserModal handleAdd={this.handleAdd} />
          </Col>
        </Row>
        <UsersList
          users={this.filterUser(this.props.users.users)}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, {
  getUsers,
  addUser,
  deleteUser,
  editUser
})(HomePage);
