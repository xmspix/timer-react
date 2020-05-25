import React from "react";

const Svg = ({ src, custom_class }) => {
  return (
    <svg className={custom_class}>
      <use xlinkHref={`/img/sprite.svg#${src}`}></use>
    </svg>
  );
};

export default Svg;
