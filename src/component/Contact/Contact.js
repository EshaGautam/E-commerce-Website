
import NavbarHeader from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import UserForm from './UserForm'
import './Contact.css'


function Contact() {


const handleSubmitData=async(userData)=>{
try{

 let data = await fetch("https://userdata-15305-default-rtdb.firebaseio.com/User.json",
{method:'POST',
body:JSON.stringify(userData),
headers:{
    'content-type':'application/json'
}});
}

catch{
console.log('error')
}
}




  return (
    <div>
    <NavbarHeader/>
    <UserForm OnAddingData={handleSubmitData}/>
    <Footer/>
    </div>
  )
}

export default Contact