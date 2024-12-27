import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = process.env.BACKEND_URL;
  const [token, setToken] = useState("");
  const [all_products, setAll_products] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/addItems",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      await axios.post(
        url + "/api/cart/removeItems",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // get total cart amount

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // get total cart item

  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      totalItems += cartItems[item];
    }

    return totalItems;
  };

  //   useEffect(() => {
  //     console.log(cartItems);
  //   }, [cartItems]);

  const fetchProductList = async () => {
    const response = await axios.get(url + "/api/product/productlist");
    setAll_products(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/getItems",
      {},
      { headers: { token } }
    );

    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchProductList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);

  const contextValue = {
    all_products,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    token,
    setToken,
    getTotalCartItems,
    url,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;