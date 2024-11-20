import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AutoCounterReact({
  quantity,
  delay = 10,
  size = "18",
  color = "black",
}) {
  if (quantity <= 0) {
    console.error("`quantity` must be a positive integer greater than zero.");
    throw new Error("Invalid `quantity` value.");
  }

  if (delay <= 0) {
    console.error("`delay` must be a positive integer greater than zero.");
    throw new Error("Invalid `delay` value.");
  }

  const maxValue = quantity;
  const fontSize = `${size}px`;
  const initValue =
    maxValue.toString().length < 3 ? 0 : Math.max(0, maxValue - 100);
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    if (value >= maxValue) return;

    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= maxValue) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [value, maxValue, delay]);

  return React.createElement(
    "span",
    {
      style: {
        fontSize: fontSize,
        color: color,
        display: "inline-block",
      },
    },
    value
  );
}

// Prop type validation
AutoCounter.propTypes = {
  quantity: PropTypes.number.isRequired, // Ensure `quantity` is a number and required
  delay: PropTypes.number, // Delay in milliseconds
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Font size can be number or string
  color: PropTypes.string, // Font color
};

AutoCounter.defaultProps = {
  delay: 10,
  size: "18",
  color: "black",
};

export default AutoCounterReact;
