import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const AddMovie = ({handleAdd}) => {
    const [newMovie,setNewMovie] = useState({
        title:'',
        description:'',
        rating:'',
        posterUrl:'',

    }
    )
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handlechange = (e) =>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
}    
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style= {{ fontWeight:'bold' ,color:'black'}}>title</Form.Label>
            <Form.Control
              type="text"
              placeholder="add movie name"
              onChange={handlechange}name="title" value={newMovie.title}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              placeholder="add your description"
              onChange={handlechange}name="description" value={newMovie.description}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="add movie rating"
              onChange={handlechange}name="rating" value={newMovie.rating}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>posterUrl</Form.Label>
            <Form.Control
              type="lien"
              placeholder="add movie poster"
              onChange={handlechange}name="posterUrl" value={newMovie.posterUrl}
              autoFocus
            />
          </Form.Group>
        
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="info" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>   
  )
}
