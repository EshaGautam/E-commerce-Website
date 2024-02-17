import React from 'react'
import NavbarHeader from '../Navbar/Navbar';
import HomeItems from './HomeItems';
import Footer from '../Footer/Footer';
function Home() {
  return (
    <div>
     <NavbarHeader/>
     <HomeItems/>
     <Footer/>
    </div>
  );
}

export default Home