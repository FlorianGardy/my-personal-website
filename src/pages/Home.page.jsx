import React from "react";
import Header from "../components/Header";
import CV from "../components/CV";
import PortFolio from "../components/PortFolio";

const Home = props => {
  const homeStyle = {
    main: {
      display: "flex",
      flexDirection: "column"
    },
    middleBlock: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "stretch"
    }
  };

  return (
    <div style={homeStyle.main}>
      <Header />
      <div style={homeStyle.middleBlock}>
        <CV />
        <PortFolio />
      </div>
    </div>
  );
};

export default Home;
