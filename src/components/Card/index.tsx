import React, { FC } from "react";

import { ShopItem } from "../../@types/shopTypes";

interface CardProps {
  shopItem: ShopItem;
  // key: number;
}

const Card: FC<CardProps> = ({ shopItem }) => {
  return (
    <div>
      <img src={`/img/${shopItem.img}`} alt="card-photo" />
      <h3>{shopItem.title}</h3>
      <p>{shopItem.price}</p>
    </div>
  );
};

export default Card;
