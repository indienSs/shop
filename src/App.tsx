import React, { FC, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Cart from "./components/Cart";
import Header from "./components/Header";
import Liked from "./components/Liked";
import MainMenu from "./components/MainMenu";
import UserInfo from "./components/UserInfo";

import { ShopItem } from "./@types/shopTypes";

const App: FC = () => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://63c7e988e52516043f472858.mockapi.io/shop_items"
      );
      setShopItems(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
