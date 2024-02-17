import React, { useState } from "react";
import ProductContext from "./ProductContext";

const productsArray = [
  {
    id: Math.random(),
    title: "Laptop",
    image: "https://source.unsplash.com/150x150/?laptop",
    price: 1200,
  },
  {
    id: Math.random(),
    title: "Smartphone",
    image: "https://source.unsplash.com/150x150/?smartphone",
    price: 800,
  },
  {
    id: Math.random(),
    title: "T-Shirt",
    image: "https://source.unsplash.com/150x150/?t-shirt",
    price: 20,
  },
  {
    id: Math.random(),
    title: "Jeans",
    image: "https://source.unsplash.com/150x150/?jeans",
    price: 50,
  },
  {
    id: Math.random(),
    title: "Coffee Maker",
    image: "https://source.unsplash.com/150x150/?coffeemaker",
    price: 60,
  },
  {
    id: Math.random(),
    title: "Toaster",
    image: "https://source.unsplash.com/150x150/?toaster",
    price: 40,
  },
  {
    id: Math.random(),
    title: "Science Fiction",
    image: "https://source.unsplash.com/150x150/?book,sciencefiction",
    price: 15,
  },
  {
    id: Math.random(),
    title: "Self-Help",
    image: "https://source.unsplash.com/150x150/?book,selfhelp",
    price: 12,
  },
];


const ProductProvider = (props)=>{
const [productArr,setProductArr]=useState(productsArray)
const [cart,setCart]=useState([])

  const addProduct = (product) => {
    setProductArr((prev) => [...prev, { product }]);
  };


 const handleAddToCart = (id) => {
   const existingProduct = cart.find((product) => product.id === id);

   if (existingProduct) {
     setCart((prev) =>
       prev.map((product) =>
         product.id === id ? { ...product, qty: product.qty + 1 } : product
       )
     );
   } else {
     const addToCart = productArr.find((product) => product.id === id);
     setCart((prev) => [...prev, { ...addToCart, qty: 1 }]);
   }
 };


const productList={
   productArr,
   addProduct,
   handleAddToCart,
   cart,
   
}




return(
    <ProductContext.Provider value={productList}>
    {props.children}
    </ProductContext.Provider>
)



}
export default ProductProvider