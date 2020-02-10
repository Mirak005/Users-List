import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";

import view from "../assets/icons/view.svg";

function PhotoModal({ path , show , handleShow }) {

 

  return (
    <>
      <Image
        onClick={handleShow}
        className="ml-3"
        as="input"
        type="submit"
        src={view}
      />

      <Modal show={show} onHide={handleShow}>
        <Image src={path} style={{height:"30rem"}} />
      </Modal>
    </>
  );
}

export default PhotoModal;
