import React from 'react'
import { Card,Button,Container,Col,Row} from 'react-bootstrap';
import productsArray from './ProductDetails';

function Products() {

   const ProductDeets = productsArray.map((product) => (
     <Col key={product.index} lg={3} xl={6}>
       <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={product.image} />
         <Card.Body>
           <Card.Title>{product.title}</Card.Title>
           <Card.Text>
             {product.price}
             <Button variant="primary">Add To Cart</Button>
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