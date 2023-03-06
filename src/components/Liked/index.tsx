import { FC } from "react";
import { useSelector } from "react-redux";
import { shopItemsSelector } from "../../redux/shopReducer/selectors";
import Card from "../Card";

import styles from "./Liked.module.scss";

const Liked: FC = () => {
  const shopItems = useSelector(shopItemsSelector);

  const likedItems = shopItems.filter((item) => item.favorite);

  return (
    <div className={styles.liked_cards}>
      {likedItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Liked;
