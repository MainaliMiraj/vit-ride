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

  const buttonClassName = `${bgColor} ${textColor} p-2 cursor-pointer rounded-md  hover:bg-orange-400 w-32 transition-all`;

  return (
    <button className={buttonClassName}>
      {Icon && <Icon className="inline-block mr-2" />} {buttonName}
    </button>
  );
};

export default Button;
