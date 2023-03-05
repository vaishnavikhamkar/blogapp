import React from 'react';
import Form from 'react-bootstrap/Form';
import './rightcard.css';
import Button from 'react-bootstrap/Button';

function RightCard() {
  return (
    <div className='rightcard'>
     <h1>Create New Blog</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control type="text" placeholder="Tile" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Blog description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select the image for the blog</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary">Submit</Button>
     </div>
  )
}

export default RightCard