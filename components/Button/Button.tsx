import React from "react";

interface ButtonProps {
  buttonName: string;
  bgColor: string;
  textColor: string;
  // color?: string;
  // colorValue?: string | number;
}
const Button: React.FC<ButtonProps> = ({
  buttonName,
  bgColor,
  textColor,
  // color,
  // colorValue,
}) => {
  // let hoverClass = "";
  // if (color && colorValue) {
  //   `hover:bg-${color}-${colorValue}`;
  // }

  const buttonClassName = `${bgColor} ${textColor} p-2 cursor-pointer rounded-md  hover:bg-gray-300 w-32`;

  return <input type="button" value={buttonName} className={buttonClassName} />;
};

export default Button;
