import React from "react";
import ImageFlorian from "../assets/FlorianGardy1.jpg";

const Home = props => {
  const homeStyle = {
    pictureFlo: {
      width: "300px",
      borderRadius: "50%"
    }
  };

  return (
    <div>
      <img
        src={ImageFlorian}
        alt="Florian Gardy"
        style={homeStyle.pictureFlo}
      />
    </div>
  );
};

export default Home;
