import { FC, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Cart from "./components/Cart";
import Header from "./components/Header";
import Liked from "./components/Liked";
import MainMenu from "./components/MainMenu";
import UserInfo from "./components/UserInfo";

import { ShopItem } from "./types/shopTypes";
import { useDispatch, useSelector } from "react-redux";
import { shopItemsSelector } from "./redux/shopReducer/selectors";
import { setItems } from "./redux/shopReducer/slice";

const App: FC = () => {
  const shopItems = useSelector(shopItemsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get<ShopItem[]>(
        "https://63c7e988e52516043f472858.mockapi.io/shop_items"
      );
      dispatch(setItems(data));
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
