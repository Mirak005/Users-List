import React ,{Component} from 'react'
import { connect } from "react-redux"

import { addPhoto , deletePhoto} from "../js/actions/PhotoActions"
import AddPhotoModal from "./AddPhotoModal"
import view from "../assets/icons/view.svg";
import search from "../assets/icons/search.svg";
import {Container , Row ,Col ,InputGroup ,FormControl ,Image} from "react-bootstrap"






class UserPhotos extends Component  {
  state={
    searchFilter:""
  }

    // handle Search
    handleSearch = e => this.setState({ searchFilter: e.target.value });
    // filter Photo by Title
  filterPhoto = arrayOfPhotos =>
  arrayOfPhotos.filter(({ title }) => {
    const photoInfo = title;
    return photoInfo
      .toLowerCase()
      .includes(this.state.searchFilter.toLowerCase().trim());
  });

    render(){
      const user = this.props.match.params.id
      console.log(user)
    return (
        <Container fluid>
        <Row className="pt-5 pb-4 ">
          <Col className="col-8">
            <h1>Karim Gharbi </h1>
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
            <AddPhotoModal 
            user={user} 
            addPhoto={this.props.addPhoto}
            />
          </Col>
        </Row>
        {this.filterPhoto(this.props.photos.photos).filter(e=> e.user ==user).map(e=> <h2>{e.title}</h2> )}
        </Container>
    )}
}
const mapStateToProps = state => ({
    photos: state.photos
  });
  

export default connect(mapStateToProps , {addPhoto})(UserPhotos)