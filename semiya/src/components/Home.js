import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductItem from "../commons/ProductItem.js";

const Home = () => {
  const user = useSelector((state) => state.user);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const defaultProducts = useSelector((state) => state.defaultProducts);
  const randomNumbers = []

  useEffect(()=>{
    for (let i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random()*(defaultProducts.lenght)))
    }
  }, [])

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/themes/amazonas/1-slide-1654484019308-5275989191-d4729401c8c8884346b9558c789610d11654484055-1920-1920.webp?1691317929"
            alt="Proba nuestros producto"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/themes/amazonas/1-slide-1654484081539-3315177195-ba9a0c7f006d65e841ccba16076752cf1654484087-1920-1920.webp?1691317929"
            alt="Proba nuestros producto"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/themes/amazonas/1-slide-1654484110962-27093613-6fbaf3d3e884b240cd1468ff7e2b0bb11654484116-1920-1920.webp?1691317929"
            alt="Proba nuestros producto"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/themes/amazonas/1-slide-1654484140488-4143274316-0a71cf2e174dbd11037bf3798ee54e361654484146-1920-1920.webp?1691317929"
            alt="Proba nuestros productos"
          />
        </Carousel.Item>
      </Carousel>

      <Navbar />
      <div className="main-container">
        <div className="cards-container">
          {defaultProducts.map((product, i) => {
            if (i % 16 === 0)
              return <ProductItem key={i} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
