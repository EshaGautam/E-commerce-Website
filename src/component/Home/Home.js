import React from 'react'
import Products from "../Products/Products";

import NavbarHeader from '../Navbar/Navbar';
function Home() {
  return (
    <div>
      <NavbarHeader />
      <Products />
    </div>
  );
}

export default Home