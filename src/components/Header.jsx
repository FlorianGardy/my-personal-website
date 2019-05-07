import React from "react";
import ImageFlorian from "../assets/FlorianGardy1.jpg";

const Header = props => {
  const headerStyle = {
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    pictureFlo: {
      width: "200px",
      borderRadius: "50%"
    }
  };

  return (
    <header style={headerStyle.header}>
      <img
        src={ImageFlorian}
        alt="Florian Gardy"
        style={headerStyle.pictureFlo}
      />
      <h1>Florian Gardy</h1>
    </header>
  );
};

export default Header;
