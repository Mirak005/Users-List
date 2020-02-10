import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import remove from "../assets/icons/delete.svg";
import PhotoModal from "./Modals/PhotoModal";

function PhotosCard({ photo, deletePhoto }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <Card
        border="dark"
        style={{ width: "18rem", height: "18rem", margin: "1%" }}
      >
        <Card.Img
          variant="top"
          src={photo.path}
          style={{ width: "18rem", height: "13rem" }}
        />
        <Card.Body className=" d-flex justify-content-center">
          <Card.Text className="font-weight-bold ">{photo.title}</Card.Text>

          <PhotoModal path={photo.path} handleShow={handleShow} show={show} />
          <Image
            className="ml-3"
            src={remove}
            as="input"
            type="submit"
            onClick={() => deletePhoto(photo._id)}
          />
        </Card.Body>
      </Card>
    </>
  );
}
export default PhotosCard;
