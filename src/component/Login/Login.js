import React, { useRef } from 'react'
import './Login.css'
import NavbarHeader from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Form ,Button} from 'react-bootstrap'
import ProductContext from '../Store/ProductContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'


function Login() {
        const history = useHistory();
      const ProductCtx = useContext(ProductContext);
      const { handleLoggedIn } = ProductCtx;

    const emailInputRef = useRef()
    const PasswordInputRef = useRef()
 


const handleLogin=async(event)=>{
    try{

    event.preventDefault();
   
    const userData = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArdEtkjfiCjPXg8O1W8SxYhW8fw8FloyY",{
        method:"POST",
        body:JSON.stringify({
            email:emailInputRef.current.value,
            password:PasswordInputRef.current.value,
            returnSecureToken:true
        }),
        headers:{
            'content-type':'application/json'
        }
      }
    );
    const response = await userData.json();
    if(userData.ok){
        console.log(response)
        handleLoggedIn(response.idToken)
        console.log(response.idToken)
        history.replace('/store')
    }
    else{
        let errorMessage = 'Failed to login'
        if(response&&response.error&&response.error.message){
            errorMessage = response.error.message
        }
        throw new Error(errorMessage)
        
    }
    }
   catch(error){
alert(error)
   }

}




const loginForm = (
  <>
    <div className="auth-form">
      <h3>LOGIN</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="auth-label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailInputRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="auth-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={PasswordInputRef}
          />
        </Form.Group>
        <Button type="submit" variant="dark" className="auth-button">
          Login
        </Button>
      </Form>
    </div>
  </>
);


  return (
    <div>
      <NavbarHeader />
      {loginForm}
      <Footer />
    </div>
  );
}

export default Login