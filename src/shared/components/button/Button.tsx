import React, { CSSProperties, ComponentProps } from "react";
import { IButton } from "./type";
import Icons from "../icons/Icon";

type ButtonProps = IButton & ComponentProps<"button">;

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, label, icon, color } = props;
  return (
    <>
      <button
        className={`btn ${color ? `${color}-btn` : ""}`}
        onClick={onClick}
        style={{}}
      >
        {props.icon && <Icons name={`${props.icon}`} />}
        <span>{label}</span>
      </button>
    </>
  );
};

export default Button;
