import React from "react";

const ProductContext = React.createContext({
 productList: [],
  Quantity: 0,
  addProduct: (product) => {},
  removeProduct: (index) => {},
})

export default ProductContext