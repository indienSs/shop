import { FC } from "react";

import styles from "./MainMenu.module.scss";

import Card from "../Card/Card";
import { ShopItem } from "../../types/shopTypes";
import { useSelector } from "react-redux";
import {
  shopItemsSelector,
  statusSelector,
} from "../../redux/slices/shopReducer";
import CardLoader from "../Card/CardLoader";

const MainMenu: FC = () => {
  const status = useSelector(statusSelector);
  const shopItems = useSelector(shopItemsSelector);

  return (
    <div className={styles.menu_cards}>
      {status === "loading"
        ? [...new Array(6)].map((card) => <CardLoader />)
        : shopItems.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default MainMenu;
