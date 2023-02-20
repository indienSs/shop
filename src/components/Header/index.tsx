import React, { FC } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/img/logo.svg" alt="logo" width="70px" />
      </div>
      <div className={styles.location}>
        <img src="/img/location.svg" alt="location" width="20px" />
        <a
          href="https://2gis.ru/irkutsk?m=104.319729%2C52.272896%2F12.23"
          target="_blank"
        >
          Иркутск, ул. Ленина, 1
        </a>
      </div>
      <div className={styles.profile}>
        <img src="/img/heart.svg" alt="heart" width="20px" />
        <img src="/img/profile.svg" alt="profile" width="20px" />
        <div className={styles.cart_information}>
          <img src="/img/cart.svg" alt="cart" width="20px" />
          <div className={styles.cart_count}>0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
