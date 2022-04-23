import React from "react";
import { motion } from "framer-motion";
import "./CustomButton.scss";

const CustomButton = (props) => {
  return (
    <motion.button
      type="submit"
      whileHover={
        !props.disabled && {
          scale: 1.05,
        }
      }
      whileTap={
        !props.disabled && {
          scale: 0.95,
        }
      }
      className={!props.disabled ? "button" : "button disabled"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </motion.button>
  );
};

export default CustomButton;
