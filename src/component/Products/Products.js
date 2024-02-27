import React, { useContext } from 'react'
import { Card,Button,Container,Col,Row} from 'react-bootstrap';
import ProductContext from "../Store/ProductContext";
import './Products.css'
import { Link } from 'react-router-dom';



function Products() {

  const ProductCtx = useContext(ProductContext)
  const{productArr,handleAddToCart} = ProductCtx
  

  const handleAddBtn=(id)=>{
    handleAddToCart(id)
  }



   const ProductDeets = productArr.map((product) => (
     <Col key={product.id} lg={3} xl={6}>
       <Card className="product-card">
         <Link to={`/product/${product.id}`}>
           <Card.Img variant="top" src={product.image} />
         </Link>
         <Card.Body>
           <Card.Title>{product.title}</Card.Title>
           <Card.Text>
             {product.price}
             <Button
               variant="primary"
               className="add-btn"
               onClick={() => {
                 handleAddBtn(product.id);
               }}
             >
               Add To Cart
             </Button>
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