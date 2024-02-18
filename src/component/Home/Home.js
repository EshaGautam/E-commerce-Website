import React from 'react'
import NavbarHeader from '../Navbar/Navbar';
import HomeItems from './HomeItems';
import Footer from '../Footer/Footer';
import FormInput from '../Form/FormInput'
function Home() {
  return (
    <div>
     <NavbarHeader/>
     <FormInput/>
     <HomeItems/>
     <Footer/>
    </div>
  );
}

export default Home