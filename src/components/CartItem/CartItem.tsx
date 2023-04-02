import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../redux/slices/shopReducer";
import { ShopItem } from "../../types/shopTypes";

import styles from "./CartItem.module.scss";

const CartItem: FC<ShopItem> = (shopItem) => {
  const [itemsCount, setItemsCount] = useState<number>(1);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(setCartItem(shopItem));
  };

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_box}>
        <img src={shopItem.img} alt="img" height={50} />
        <h3>{shopItem.title}</h3>
      </div>

      <div className={styles.price_counter}>
        <div className={styles.cart_box}>
          <button
            onClick={() => setItemsCount((prev) => prev - 1)}
            disabled={itemsCount < 2}
          >
            {" "}
            -{" "}
          </button>
          <p>{itemsCount}</p>
          <button onClick={() => setItemsCount((prev) => prev + 1)}>+</button>
        </div>
        <div className={styles.cart_box}>
          <p>{shopItem.price * itemsCount}₽</p>
          <button onClick={removeFromCart}>x</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
