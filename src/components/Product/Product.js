import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Product.css'
const Product = (props) => {
  const {name,email,id}=props.product;
  return (
    <div className='container'>
     <Card className="text-center">
      <Card.Header className='text-danger'> Only ${(id*10)-0.01}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.<br/>{email}
        </Card.Text>
        <Button variant="primary" onClick={() => props.handleProduct(props.product)}>Enroll Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{Math.floor(Math.random()*10)} days left</Card.Footer>
    </Card>
    </div>
  );
};

export default Product;