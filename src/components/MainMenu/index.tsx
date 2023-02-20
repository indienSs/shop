import React, { FC } from "react";

import Card from "../Card";
import { ShopItem } from "../../@types/shopTypes";

interface MainMenuProps {
  shopItems: ShopItem[];
}

const MainMenu: FC<MainMenuProps> = ({ shopItems }) => {
  return (
    <div>
      {shopItems.map((item) => (
        <Card key={item.id} shopItem={item}/>
      ))}
    </div>
  );
};

export default MainMenu;
