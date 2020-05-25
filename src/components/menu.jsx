import React, { useState } from "react";
import Buttons from "./timer/buttons_menu";
import Svg from "./svg";

const Menu = () => {
  const [state, setState] = useState({
    isMenuToggled: false,
  });

  const { isMenuToggled } = state;

  const toggleMenu = () => {
    isMenuToggled
      ? setState({ isMenuToggled: false })
      : setState({ isMenuToggled: true });
  };

  return (
    <div className={!isMenuToggled ? "options" : "options active"}>
      <div className="options__container">
        <Buttons />
      </div>
      <div className="options__menu" onClick={() => toggleMenu()}>
        <Svg src="icon-gears" custom_class="icon" />
      </div>
    </div>
  );
};

export default Menu;
