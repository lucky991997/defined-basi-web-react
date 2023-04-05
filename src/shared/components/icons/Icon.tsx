import React from "react";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import BrowseGallerySharpIcon from "@mui/icons-material/BrowseGallerySharp";

type IconsProps = {
  name: string;
};

const Icons: React.FC<IconsProps> = (props) => {
  const renderIcons = (name: string) => {
    switch (name) {
      case "camera":
        return <VideocamOutlinedIcon />;
      case "chat":
        return <SmsOutlinedIcon />;
      case "headPhone":
        return <HeadsetOutlinedIcon />;
      case "person":
        return <PersonIcon />;
      case "logout":
        return <LogoutIcon />;
      case "history":
        return <BrowseGallerySharpIcon />;
      default:
        return <></>;
    }
  };

  return <>{renderIcons(props.name)}</>;
};

export default Icons;
