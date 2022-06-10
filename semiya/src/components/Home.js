import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="container">
      <Navbar />
      <img
        src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/434/490/themes/amazonas/1-slide-1644085452723-3473521909-81615b49a5a0bbd88c886beae29894e61644085469-1920-1920.webp?1318798933
"
        className="img-fluid"
        alt="img-fluid"
      ></img>
    </div>
  );
};

export default Home;
