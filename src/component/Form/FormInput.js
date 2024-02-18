import './FormInput.css'
import { Form ,Button} from 'react-bootstrap'
import React, { useRef } from 'react'

const FormInput=()=> {
  let enteredTitle = useRef('')
  let enteredDirector= useRef('')
  let enteredDate = useRef('')

 
const handleMovieSubmit=(event)=>{
  event.preventDefault()
  let movieObj = {
    title: enteredTitle.current.value,
    director: enteredDirector.current.value,
    date: enteredDate.current.value,
  };
  console.log(movieObj)
}
  return (
    <div className="form-style">
      <form onSubmit={handleMovieSubmit}>
        <label>TITLE</label>
        <Form.Control type="text" aria-label="Disabled input example" ref={enteredTitle} />
        <br />
        <label>DIRECTOR</label>
        <Form.Control as="textarea" rows={3}  ref={enteredDirector}/>
        <br />
        <label>RELEASE DATE</label>
        <Form.Control type="date" aria-label="Disabled input example" ref={enteredDirector}/>
        <Button  type="submit" variant="secondary" className='form-btn'>Add Movie</Button>
      </form>
    </div>
  );
}

export default FormInput