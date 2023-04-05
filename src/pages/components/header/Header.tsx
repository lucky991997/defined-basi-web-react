import React, { ReactNode } from "react";
import logo from "../../../shared/images/logo.jpg";
import { IButton } from "../../../shared/components/button/type";
import { Button } from "../../../shared/components";

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;

  const handleClickCall = () => {};
  const handleLogout = () => {};
  const optionButton: IButton[] = [
    {
      label: "Call",
      onClick: handleClickCall,
      icon: 'camera'
    },
    {
      label: "My Profile",
      onClick: handleLogout,
      icon: 'logout'
    },
  ];
  const renderOptionButton = () => {
    return (
      optionButton &&
      optionButton.map((i: IButton, index: number) => (
        <Button label={i.label} onClick={i.onClick} icon={i.icon}/>
      ))
    );
  };
  return (
    <div className="header">
      <div className="header-title">
        <img src={`${logo}`} alt="" />
        <h1>{title}</h1>
      </div>
      <div className="header-event">{renderOptionButton()}</div>
      {props.children}
    </div>
  );
};

export default Header;
