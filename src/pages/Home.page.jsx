import React from "react";
import Header from "../components/Header";

const Home = props => {
  const homeStyle = {
    main: {
      display: "flex",
      flexDirection: "column"
    }
  };

  return (
    <div style={homeStyle.main}>
      <Header />
    </div>
  );
};

export default Home;
