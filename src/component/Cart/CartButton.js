import React, {  useState } from 'react'
import CartProduct from './CartProduct'
import { Container,Button } from 'react-bootstrap'
import './CartButton.css'
import { useContext } from "react";
import ProductContext from "../Store/ProductContext";

function CartButton() {
    const ProductCtx = useContext(ProductContext);
    const { cart } = ProductCtx;

 const[orderInCart,setOrderInCart]= useState(false)
  const cartQty = cart.length;

 const handleCartBtn=()=>{
    setOrderInCart(!orderInCart)
 }
   
  return (
    <Container>
      <Button variant="outline-info" className='cart-button' onClick={handleCartBtn}>Cart {cartQty}</Button>
      {orderInCart&&<CartProduct onClick={handleCartBtn}/>}
    </Container>
  );
}

export default CartButton