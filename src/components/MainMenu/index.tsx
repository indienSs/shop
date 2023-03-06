import { FC } from "react";

import styles from "./MainMenu.module.scss";

import Card from "../Card";
import { ShopItem } from "../../types/shopTypes";
import { useSelector } from "react-redux";
import { shopItemsSelector } from "../../redux/shopReducer/selectors";

const MainMenu: FC = () => {
  const shopItems = useSelector(shopItemsSelector);

  return (
    <div className={styles.menu_cards}>
      {shopItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MainMenu;
