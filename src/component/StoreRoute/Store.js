import React from "react";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import CartButton from "../Cart/CartButton";

import NavbarHeader from "../Navbar/Navbar";
function Store() {
  return (
    <div>
      <NavbarHeader />
      <CartButton />
      <Products />
      <Footer />
    </div>
  );
}

export default Store;
