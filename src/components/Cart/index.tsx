import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shopItemsSelector } from "../../redux/shopReducer/selectors";
import CartItem from "../CartItem";

import styles from "./Cart.module.scss";

const Cart = () => {
  const shopItems = useSelector(shopItemsSelector);

  const cartAddedItems = shopItems.filter((item) => item.cart);

  if (cartAddedItems.length === 0) {
    return (
      <div className={styles.cart_empty}>
        <h2>Вы ничего не добавляли в корзину</h2>
        <Link to="/">
          <button>На главную</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.cart_items}>
      {cartAddedItems.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}
      <button className={styles.pay_button}>Оплатить</button>
    </div>
  );
};

export default Cart;
