import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./button.module.css";

const Button = React.forwardRef((props, ref) => {
  const { color, round, children, fullWidth, size, block, ...rest } = props;

  const btnStyles = classNames({
    [styles.button]: true,
    [styles[size]]: size,
    [styles[color]]: color,
    [styles.round]: round,
    [styles.fullWidth]: fullWidth,
    [styles.block]: block,
  });
  return (
    <button {...rest} ref={ref} className={btnStyles}>
      {children}
    </button>
  );
});

Button.propTypes = {
  color: PropTypes.oneOf(["blue", "red", "purple"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
