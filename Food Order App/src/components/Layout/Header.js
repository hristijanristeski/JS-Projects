// header and image component

import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg"; // importing local image from the pc
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
