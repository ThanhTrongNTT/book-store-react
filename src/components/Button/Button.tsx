import React, { ReactElement } from "react";
interface ButtonType {
  label: string;
  icon: ReactElement;
}
const Button = (props: ButtonType) => {
  return (
    <button className="rounded-xl bg-white px-5 font-bold text-lg flex items-center gap-3 hover:bg-primary shadow-lg">
      {props.icon}
      <span>{props.label}</span>
    </button>
  );
};

export default Button;
