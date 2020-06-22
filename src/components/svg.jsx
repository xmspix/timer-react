import React from "react";

// const isDevelopment = process.env.NODE_ENV !== "production";
// console.log(isDevelopment);

const Svg = ({ src, custom_class }) => {
  return (
    <svg className={custom_class}>
      <use
        xlinkHref={
          `./img/sprite.svg#${src}`
          // isDevelopment ? `/img/sprite.svg#${src}` : `./img/sprite.svg#${src}`
        }
      ></use>
    </svg>
  );
};

export default Svg;
