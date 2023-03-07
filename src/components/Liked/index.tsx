import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shopItemsSelector } from "../../redux/shopReducer/selectors";
import Card from "../Card";

import styles from "./Liked.module.scss";

const Liked: FC = () => {
  const shopItems = useSelector(shopItemsSelector);

  const likedItems = shopItems.filter((item) => item.favorite);

  if (likedItems.length === 0) {
    return (
      <div className={styles.favorites_empty}>
        <h2>Вы ничего не добавляли в избранное</h2>
        <Link to="/">
          <button>На главную</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.liked_cards}>
      {likedItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Liked;
