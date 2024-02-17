
import { Container, Row, Col,Button} from "react-bootstrap";
import  ReactDOM from "react-dom";
import './CartProduct.css'

function Cart(props) {
  const CartItem = [
    {
      title: "Laptop",
      image: "https://source.unsplash.com/150x150/?laptop",
      price: 1200,
      qty: 2,
    },
    {
      title: "Smartphone",
      image: "https://source.unsplash.com/150x150/?smartphone",
      price: 800,
      qty: 5,
    },
    {
      title: "T-Shirt",
      image: "https://source.unsplash.com/150x150/?t-shirt",
      price: 20,
      qty: 6,
    },
    {
      title: "Jeans",
      image: "https://source.unsplash.com/150x150/?jeans",
      price: 50,
      qty: 8,
    },
  ];

let totalAmount = CartItem.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

  let Items = CartItem.map((item) => (
    <Container className="item">
      <Row key={item.index}>
        <Col>
          <img src={item.image} alt="404"></img>
            {item.title}
        </Col>
        <Col>{item.price}</Col>
        <Col>
          {item.qty}
          <Button variant="outline-danger" className="remove-btn">
            Remove
          </Button>
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
