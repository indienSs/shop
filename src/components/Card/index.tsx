import { FC } from "react";

import styles from "./Card.module.scss";

import { ShopItem } from "../../types/shopTypes";
import heart from "../../assets/img/heart.svg";
import plus from "../../assets/img/plus.png";
import liked from "../../assets/img/heartclicked.png";
import checked from "../../assets/img/checked.png";
import { useDispatch } from "react-redux";
import { setFavoriteItem, setCartItem } from "../../redux/shopReducer/slice";

const Card: FC<ShopItem> = (shopItem) => {
  const dispatch = useDispatch();

  const onClickHeart = () => {
    dispatch(setFavoriteItem(shopItem));
  };

  const onClickCart = () => {
    dispatch(setCartItem(shopItem));
  };

  return (
    <div className={styles.card}>
      <img src={shopItem.img} alt="card-photo" className={styles.card_photo} />
      <div className={styles.card_info}>
        <h4>{shopItem.title}</h4>
        <p>{shopItem.price} ₽</p>
      </div>
      <img
        src={shopItem.favorite ? liked : heart}
        alt="heart"
        width={25}
        className={styles.card_heart}
        onClick={onClickHeart}
      />
      <img
        src={shopItem.cart ? checked : plus}
        alt="cart"
        width={25}
        className={styles.card_plus}
        onClick={onClickCart}
      />
    </div>
  );
};

export default Card;
