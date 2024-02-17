import React from 'react'
import { Card,Button,Container,Col,Row} from 'react-bootstrap';
import productsArray from './ProductDetails';
import './Product.css'

function Products() {

   const ProductDeets = productsArray.map((product) => (
     <Col key={product.index} lg={3} xl={6}>
       <Card  className='product-card'>
         <Card.Img variant="top" src={product.image} />
         <Card.Body>
           <Card.Title>{product.title}</Card.Title>
           <Card.Text>
             {product.price}
             <Button variant="primary" className='add-btn'>Add To Cart</Button>
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   ));

  return (
    <Container>
      <Row>{ProductDeets}</Row>
    </Container>
  );
}

export default Products