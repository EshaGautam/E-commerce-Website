import React, { useRef } from 'react'
import { Form, Button } from "react-bootstrap";
import './UserForm.css'

function UserForm(props) {

  let enteredName = useRef('')
  let enteredNumber = useRef('')
  let enteredEmail = useRef('')

  const handleUserData=(event)=>{
   event.preventDefault()
   const userData={
    name:enteredName.current.value,
    email:enteredEmail.current.value,
    number:enteredNumber.current.value,
   }
   
   props.OnAddingData(userData)
   console.log(userData)
  enteredName.current.value=''
  enteredEmail.current.value=''
  enteredNumber.current.value=''
  }



  return (
    <form className="userform" onSubmit={handleUserData}>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingNameCustom"
          type="text"
          placeholder="Enter-Name"
          ref={enteredName}
        />
        <label htmlFor="floatingNameCustom">Username</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingEmailCustom"
          type="email"
          placeholder="Enter-Email"
          ref={enteredEmail}
        />
        <label htmlFor="floatingEmailCustom">Email</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingnumberCustom"
          type="text"
          placeholder="Enter-PhoneNumber"
          ref={enteredNumber}
         
        />
        <label htmlFor="floatingNumberCustom">PhoneNumber</label>
      </Form.Floating>
      <Button variant="success" type="submit" className="submit-btn">
        Submit
      </Button>
    </form>
  );
}

export default UserForm