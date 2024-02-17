import React, { useState } from 'react'
import CartProduct from './CartProduct'
import { Container,Button } from 'react-bootstrap'
import './CartButton.css'

function CartButton() {
 const[orderInCart,setOrderInCart]= useState(false)

 const handleCartBtn=()=>{
    setOrderInCart(!orderInCart)
 }
   
  return (
    <Container>
      <Button variant="outline-info" className='cart-button' onClick={handleCartBtn}>Cart 0</Button>
      {!orderInCart&&<CartProduct onClick={handleCartBtn}/>}
    </Container>
  );
}

export default CartButton