import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

import location from "../../assets/img/location.svg";
import heart from "../../assets/img/heart.svg";
import user from "../../assets/img/profile.svg";
import cart from "../../assets/img/cart.svg";
import logo from "../../assets/img/logo.png";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <div className={styles.logo_flex}>
            <img src={logo} alt="logo" width="70px" />
            <h2>Магазин для туристов</h2>
          </div>
        </Link>
      </div>
      <div className={styles.location}>
        <img src={location} alt="location" width="20px" />
        <a
          href="https://2gis.ru/irkutsk?m=104.319729%2C52.272896%2F12.23"
          target="_blank"
        >
          Иркутск, ул. Ленина, 1
        </a>
      </div>
      <div className={styles.profile}>
        <Link to="/liked">
          <img src={heart} alt="heart" width="20px" />
        </Link>
        <Link to="/user">
          <img src={user} alt="profile" width="20px" />
        </Link>
        <Link to="/cart">
          <div className={styles.cart_information}>
            <img src={cart} alt="cart" width="20px" />
            <div className={styles.cart_count}>0</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
