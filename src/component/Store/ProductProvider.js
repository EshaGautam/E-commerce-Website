import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";

const productsArray = [
  {
    id: Math.random(),
    title: "Laptop",
    image: "https://source.unsplash.com/150x150/?laptop",
    price: 1200,
    Des: "Introducing the ABC Laptop, a powerful computing device designed for productivity and entertainment",
    review: [
      {
        id: 1,
        user: {
          userId: 456,
          username: "tech_guru",
        },
        rating: 4.5,
        comment:
          "The phone's camera quality is impressive, and the battery life is excellent. Highly recommended!",
        date: "2024-02-26",
      },
    ],
  },
  {
    id: Math.random(),
    title: "Smartphone",
    image:
      "../public/productImage/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.webp",
    Des: "zzzz",
    price: 800,
    review: [
      {
        id: 3,
        user: {
          userId: 123,
          username: "mobile_enthusiast",
        },
        rating: 5.0,
        comment:
          "This phone exceeded my expectations! The display is vibrant, and the processing speed is top-notch.",
        date: "2024-02-24",
      },
    ],
  },
  {
    id: Math.random(),
    title: "T-Shirt",
    image: "https://source.unsplash.com/150x150/?t-shirt",
    price: 20,
    review: [
      {
        id: 2,
        user: {
          userId: 789,
          username: "jane_smith",
        },
        rating: 3.8,
        comment: "Good quality, but the size runs a bit small.",
        date: "2024-02-25",
      },
    ],
  },
  {
    id: Math.random(),
    title: "Jeans",
    image: "https://source.unsplash.com/150x150/?jeans",
    price: 50,
    Des: "zzzz",
    review: [
      {
        id: 3,
        user: {
          userId: 123,
          username: "bob_jones",
        },
        rating: 5.0,
        comment: "Absolutely fantastic! Will buy again.",
        date: "2024-02-24",
      },
    ],
  },
  {
    id: Math.random(),
    title: "Coffee Maker",
    image: "https://source.unsplash.com/150x150/?coffeemaker",
    price: 60,
    Des: "zzzz",
    review: [
      {
        id: 4,
        user: {
          userId: 567,
          username: "sara_miller",
        },
        rating: 4.2,
        comment: "Fast shipping and great customer service.",
        date: "2024-02-23",
      },
    ],
  },
  {
    id: Math.random(),
    title: "Toaster",
    image: "https://source.unsplash.com/150x150/?toaster",
    price: 40,
    Des: "zzzz",
    review: [
      {
        id: 8,
        user: {
          userId: 901,
          username: "amy_harris",
        },
        rating: 4.0,
        comment: "Overall satisfied with the purchase.",
        date: "2024-02-19",
      },
    ],
  },
  {
    id: Math.random(),
    title: "Science Fiction",
    image: "https://source.unsplash.com/150x150/?book,sciencefiction",
    price: 15,
    Des: "zzzz",
    review: [
      {
        id: 1,
        user: {
          userId: 456,
          username: "book_lover123",
        },
        rating: 4.2,
        comment:
          "This book kept me hooked from start to finish. The plot twists were unexpected!",
        date: "2024-02-26",
      },
    ],
  },
  {
    id: Math.random(),
    title: "Self-Help",
    image: "https://source.unsplash.com/150x150/?book,selfhelp",
    price: 12,
    Des: "zzzz",
    review: [
      {
        id: 1,
        user: {
          userId: 456,
          username: "john_doe",
        },
        rating: 4.5,
        comment: "Great product, exceeded my expectations!",
        date: "2024-02-26",
      },
    ],
  },
];

const ProductProvider = (props) => {
  const existingUser = localStorage.getItem("token");
  const existingExpirationTime = localStorage.getItem("time");
  const emailSet = localStorage.getItem("email");

  const [productArr, setProductArr] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(existingUser);
  const [userEmail, setUserEmail] = useState(emailSet);
  const [expirationTime, setExpirationTime] = useState(existingExpirationTime);

  const dataApi = `https://crudcrud.com/api/42b653bf4357492686fba3be3aa402dc/cart${userEmail}`;

  const isUserLoggedIn = !!token;

  // checking expiration time when page initally render

  useEffect(() => {
    if (expirationTime && new Date(expirationTime) < new Date()) {
      handleLogOut();
    }
  }, [expirationTime]);

  // Fetch data on initial render

  useEffect(() => {
    fetchData();
  }, [token, userEmail]);

  //  handling Add-cart when user click on button

  const handleAddToCart = (id) => {
    const existingProduct = cart.find((product) => +product.id === +id);

    if (existingProduct) {
      setCart((prev) =>
        prev.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        )
      );
    } else {
      const addToCart = productArr.find((product) => product.id === id);
      setCart((prev) => [...prev, { ...addToCart, qty: 1 }]);
      sendData({ ...addToCart, qty: 1 });
    }
  };

  //  sending Data when user Add product in the cart

  async function sendData(product) {
    try {
      if (userEmail) {
        const response = await fetch(dataApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (response.ok) {
          console.log("Product added to cart");
        }
      }
    } catch (error) {
      console.error("Error in sending cart data:", error);
    }
  }

  // Function to fetch data from database
  const fetchData = async () => {
    try {
      const userDeets = await fetch(dataApi);
      const data = await userDeets.json();
      if (userDeets.ok) {
        console.log(data);
        setCart(data);
      } else {
        throw new Error("Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  //handling login----------------------
  function handleLoggedIn(id, email) {
    const expirationTime = new Date(new Date().getTime() + 5 * 60 * 1000);
    localStorage.setItem("token", id);
    localStorage.setItem("time", expirationTime.toISOString());

    localStorage.setItem("email", email.replace(/[@.]/g, ""));
    setToken(id);
    setExpirationTime(expirationTime.toISOString());
    setUserEmail(email.replace(/[@.]/g, ""));
  }

  // handling logOut-----------------
  const handleLogOut = () => {
    setToken(null);
    setExpirationTime(null);
    localStorage.removeItem("token");
    localStorage.removeItem("time");
    localStorage.removeItem("email");
  };

  // Adding products to be displayed on the screen

  function addProduct(product) {
    setProductArr((prev) => [...prev, { product }]);
  }

  // Remove data from cart
  const handleCartItemRemove = (items) => {
    const Items = cart.filter((item) => item._id !== items._id);
    const deleteItem = cart.find((item) => item._id === items._id);
    setCart(Items);
    deleteData(deleteItem._id);
  };

  // Deleting data from dataBase
  async function deleteData(id) {
    try {
      const response = await fetch(`${dataApi}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Deleted");
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
    handleLogOut,
    handleCartItemRemove,
  };

  return (
    <ProductContext.Provider value={productList}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
