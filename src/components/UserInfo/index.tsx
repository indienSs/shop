import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/userReducer/selectors";
import { removeUserName, setUserName } from "../../redux/userReducer/slice";
import userPicture from "../../assets/img/userpicture.png";

import styles from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  const userName = useSelector(userSelector);
  const dispatch = useDispatch();

  const [user, setUser] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUserName(user));
  };

  const formChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser(value);
  };

  const exitAccount = () => {
    dispatch(removeUserName);
  };

  if (userName) {
    return (
      <div className={styles.user_info}>
        <img src={userPicture} alt="user-picture" width={100} />
        <h2>{userName}</h2>
        <button onClick={exitAccount}>Выйти из аккаунта</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.user_info}>
        <input
          type="text"
          value={user}
          placeholder="Введите имя пользователя"
          onChange={formChangeName}
        />
        <button>Войти</button>
      </form>
    </div>
  );
};

export default UserInfo;
