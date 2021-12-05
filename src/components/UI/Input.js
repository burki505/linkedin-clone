import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, placeholder, className }) => {
  return (
    <div className={`${classes.input} ${className}`}>
      <input type={type} placeholder={placeholder} />
      <i class="fas fa-search"></i>
    </div>
  );
};

export default Input;
