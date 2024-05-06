import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  buttonName: string;
  bgColor: string;
  textColor: string;
  // color?: string;
  // colorValue?: string | number;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  buttonName,
  bgColor,
  textColor,
  // color,
  // colorValue,
  icon: Icon,
}) => {
  // let hoverClass = "";
  // if (color && colorValue) {
  //   `hover:bg-${color}-${colorValue}`;
  // }

  const buttonClassName = `${bgColor} ${textColor} p-2 cursor-pointer rounded-md  hover:bg-gray-300 w-32`;

  return (
    <button className={buttonClassName}>
      {Icon && <Icon className="inline-block mr-2" />}{" "}
      {/* Render icon if it's provided */}
      {buttonName}
    </button>
  );
};

export default Button;
