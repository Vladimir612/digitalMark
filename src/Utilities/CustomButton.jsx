import React from "react";
import { motion } from "framer-motion";
import "./CustomButton.scss";

const CustomButton = (props) => {
  return (
    <motion.button
      type="submit"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={"button " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default CustomButton;
