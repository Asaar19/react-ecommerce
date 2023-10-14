import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/ProductContext";
import FeaturedProducts from "../components/FeaturedProducts";
import { Link } from "react-router-dom";
import ProductsSlider from "../components/ProductImagesSlider";

const Home = () => {
  const myName = useProductContext();

  const data = {
    title: "iStore.",
    image:
      "https://img.freepik.com/premium-photo/man-choosing-monitor-shop_461973-752.jpg",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProducts />

      <section className="padding-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="./shop.jpg" alt="" className="img-fluid image-style" />
            </div>
            <div className="col-md-6 d-flex align-items-center px-5">
              <div>
                <h2 className="mb-3">24-Hour Convenience</h2>
                <p className="theme-para mb-5">
                Step into the world of endless possibilities at our 24-hour tech store. No matter the hour, we're your go-to destination for the latest gadgets, electronics, and tech solutions. Explore a wide array of cutting-edge devices, from smartphones to laptops, gaming gear to smart home technology.  
                </p>
                <Link to="/contact" className="theme-btn">
                Contact Us
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsSlider/>
    </>
  );
};

export default Home;
