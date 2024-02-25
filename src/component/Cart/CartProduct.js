
import { Container, Row, Col,Button, Form} from "react-bootstrap";
import  ReactDOM from "react-dom";
import './CartProduct.css'
import { useContext } from "react";
import ProductContext from "../Store/ProductContext";

function Cart(props) {
  
  const ProductCtx = useContext(ProductContext);
  const { cart,handleCartItemRemove} = ProductCtx;
const handleRemove=(id)=>{
 handleCartItemRemove(id)

}






let totalAmount = cart.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

  let Items = cart.map((item) => (
    <Container className="item">
      <Row key={item.id}>
        <Col>
          <img src={item.image} alt="404"></img>
          {item.title}
        </Col>
        <Col>{item.price}</Col>
        <Col>
          <div className="input-qty">
          
            <Form>
              <Form.Control placeholder="Qty" value={item.qty}/>
            </Form>
            <Button variant="outline-danger" className="remove-btn" onClick={()=>{handleRemove(item.id)}}>
              Remove
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  ));

  return (
    <Container className="cart-item">
      <div className="cnt">
        <h1>CART</h1>
        <Button variant="light" onClick={props.onClick}>
          X
        </Button>
      </div>
      <div className="header-row">
        <Row>
          <Col>Item</Col>
          <Col>Price</Col>
          <Col>Qty</Col>
        </Row>
        
        {Items}
      </div>
      <Row className="amt">Total Amount:{totalAmount}</Row>
    </Container>
  );
}

function CartProduct(props) {
  return ReactDOM.createPortal(<Cart onClick={props.onClick}/>, document.getElementById("modal-root"));
}

export default CartProduct
