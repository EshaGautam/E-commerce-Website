import React, { useContext, useEffect ,useState} from "react";
import NavbarHeader from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import ProductContext from "../Store/ProductContext";
import ProductImg from "./ProductImg";
import { Button } from "react-bootstrap";
import CartButton from "../Cart/CartButton";

function ProductDetail() {
  const ProductCtx = useContext(ProductContext);
  const { productArr, handleAddToCart } = ProductCtx;

 


  const { productId } = useParams();
  const [productDeets, setProductDeets] = useState([]);
  const [haveDeets,setHaveDeets] = useState(false)


   const handleAddBtn = (id) => {
     handleAddToCart(id);
   };


  useEffect(() => {

    const existingProductDeets = JSON.parse(
      localStorage.getItem("selectedProduct")
    );

    if (existingProductDeets && existingProductDeets.id === +productId) {
      setProductDeets(existingProductDeets);
      setHaveDeets(true);
    }
     else {

      const selectedProduct = productArr.find(
        (product) => +product.id === +productId
      );

      if (selectedProduct) {
        localStorage.setItem(
          "selectedProduct",
          JSON.stringify(selectedProduct)
        );
        setProductDeets(selectedProduct);
        setHaveDeets(true);
      }
    }
  }, [productId, productArr]);

  return (
    <div>
      <NavbarHeader />
      <CartButton />
      {haveDeets && productDeets && (
        <>
          <div className="detail">
            <h2>{productDeets.title}</h2>
            <p>{productDeets.Des}</p>
            <p>Rs:{productDeets.price}</p>
          </div>
          <ProductImg src={productDeets.image} />
          <div className="deets-btn">
            <Button
              variant="warning"
              onClick={() => {
                handleAddBtn(productDeets.id);
              }}
            >
              Add To Cart
            </Button>
            <Button variant="danger">Buy Now</Button>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default ProductDetail;
