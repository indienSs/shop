import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Liked from "./components/Liked/Liked";
import MainMenu from "./components/MainMenu/MainMenu";
import UserInfo from "./components/UserInfo/UserInfo";
import { fetchItems } from "./redux/slices/shopReducer";
import { useAppDispatch } from "./redux/store";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
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
