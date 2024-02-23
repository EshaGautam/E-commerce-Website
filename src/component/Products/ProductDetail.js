import React, { useContext, useEffect ,useState} from "react";
import NavbarHeader from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import ProductContext from "../Store/ProductContext";

function ProductDetail() {
  const ProductCtx = useContext(ProductContext);
  const { productArr } = ProductCtx;
  const { productId } = useParams();
  const [productDeets, setProductDeets] = useState([]);
  const [haveDeets,setHaveDeets] = useState(false)

 useEffect(()=>{

const selectedProduct = productArr.find(
  (product) => +product.id === +productId
);
setProductDeets(selectedProduct)
setHaveDeets(true)

 },[productArr, productId])
  
  return (
    <div>
      <NavbarHeader />
      {haveDeets && productDeets&& 
        <div>
          <h2>{productDeets.title}</h2>
          <p>{productDeets.description}</p>
          <p>{productDeets.price}</p>
          <img src={productDeets.image} alt={productDeets.title} />
        </div>
}
     

      <Footer />
    </div>
  );
}

export default ProductDetail;
