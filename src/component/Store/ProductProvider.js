import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";

const productsArray = [
  {
    id: Math.random(),
    title: "Laptop",
    image: "https://source.unsplash.com/150x150/?laptop",
    price: 1200,
    Des: "zzzz",
  },
  {
    id: Math.random(),
    title: "Smartphone",
    image:
      "../public/productImage/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.webp",
    Des: "zzzz",
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
    Des: "zzzz",
  },
  {
    id: Math.random(),
    title: "Coffee Maker",
    image: "https://source.unsplash.com/150x150/?coffeemaker",
    price: 60,
    Des: "zzzz",
  },
  {
    id: Math.random(),
    title: "Toaster",
    image: "https://source.unsplash.com/150x150/?toaster",
    price: 40,
    Des: "zzzz",
  },
  {
    id: Math.random(),
    title: "Science Fiction",
    image: "https://source.unsplash.com/150x150/?book,sciencefiction",
    price: 15,
    Des: "zzzz",
  },
  {
    id: Math.random(),
    title: "Self-Help",
    image: "https://source.unsplash.com/150x150/?book,selfhelp",
    price: 12,
    Des: "zzzz",
  },
];

const ProductProvider = (props) => {
  const existingUser = localStorage.getItem("token");
  const existingExpirationTime = localStorage.getItem("time");

  const [productArr, setProductArr] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(existingUser);
  const [userEmail, setUserEmail] = useState("");
  const [expirationTime, setExpirationTime] = useState(existingExpirationTime);

  const isUserLoggedIn = !!token;

  useEffect(() => {
    fetchData();
  }, [userEmail]);

  useEffect(() => {
    if (expirationTime && new Date(expirationTime) < new Date()) {
      handleLogOut();
    }
  }, [expirationTime]);

  const handleAddToCart = (id) => {
    const existingProduct = cart.find((product) => +product.id === +id);

    if (existingProduct) {
      setCart((prev) =>
        prev.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        )
      );
      sendData(existingProduct);
    } else {
      const addToCart = productArr.find((product) => product.id === id);
      setCart((prev) => [...prev, { ...addToCart, qty: 1 }]);
      sendData({ ...addToCart, qty: 1 });
    }
  };

  async function sendData(product) {
    try {
      const clearedEmail = userEmail.replace(/[@.]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/0e6c679dda864cb58184d81c71d2b18d/cart/${clearedEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (response.ok) {
        console.log(response);
      }
    } catch (error) {
      console.error("Error in sending cart data:", error);
    }
  }

  const fetchData = async () => {
    try {
      const clearedEmail = userEmail.replace(/[@.]/g, "");
      const userDeets = await fetch(
        `https://crudcrud.com/api/0e6c679dda864cb58184d81c71d2b18d/cart/${clearedEmail}`
      );
      const data = await userDeets.json();
      console.log(data);

      if (userDeets.ok) {
        setCart(data);
      } else {
        throw new Error("Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  function handleLoggedIn(id) {
    const expirationTime = new Date(new Date().getTime() + 5 * 60 * 1000);
    localStorage.setItem("token", id);
    localStorage.setItem("time", expirationTime.toISOString());
    setToken(id);
    setExpirationTime(expirationTime.toISOString());
  }

  const handleLogOut = () => {
    setToken(null);
    setExpirationTime(null);
    localStorage.removeItem("token");
    localStorage.removeItem("time");
  };

  function addProduct(product) {
    setProductArr((prev) => [...prev, { product }]);
  }

  const handleUserEmail = (email) => {
    setUserEmail(email);
  };

  const handleCartItemRemove = (id) => {
    const Items = cart.filter((item) => item.id !== id);
    setCart(Items);
  };

  async function deleteData(id) {
    try {
      const clearedEmail = userEmail.replace(/[@.]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/0e6c679dda864cb58184d81c71d2b18d/cart/${clearedEmail}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(response);
        handleCartItemRemove(id);
        fetchData();
      } else {
        console.error("Failed to delete product from cart");
      }
    } catch (error) {
      console.error("Error in deleting cart data:", error);
    }
  }

  const productList = {
    productArr,
    addProduct,
    handleAddToCart,
    cart,
    token,
    handleLoggedIn,
    isUserLoggedIn,
    handleUserEmail,
    handleLogOut,
    handleCartItemRemove,
    deleteData,
  };

  return (
    <ProductContext.Provider value={productList}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
