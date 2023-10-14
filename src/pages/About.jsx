import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/ProductContext";

const About = () => {
  const myName = useProductContext();

  const data = {
    title: "About",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  };

  return (
    <>
      {/* <HeroSection myData={data} /> */}
      <section className="padding-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1536273513130-d8477e6e4389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt=""
                className="img-fluid image-style mb-5 about-image"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center px-5">
              <div>
                <h2>About Us</h2>
                <p className="theme-para mb-0">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae necessitatibus rerum officiis quaerat ullam
                  placeat unde iusto maiores consectetur. Dolorem voluptate
                  maiores autem consequatur laborum pariatur expedita asperiores
                  laudantium. Incidunt dolore cum natus error, placeat
                  blanditiis dolorem, officia nobis libero odit neque, deleniti
                  ab.
                </p>
              </div>
            </div>
          </div>
          <p className="theme-para mb-0 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae necessitatibus rerum officiis quaerat ullam placeat unde
            iusto maiores consectetur. Dolorem voluptate maiores autem
            consequatur laborum pariatur expedita asperiores laudantium.
            Incidunt dolore cum natus error, placeat blanditiis dolorem, officia
            nobis libero odit neque, deleniti ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae necessitatibus rerum officiis quaerat ullam placeat unde
            iusto maiores consectetur. Dolorem voluptate maiores autem
            consequatur laborum pariatur expedita asperiores laudantium.
            Incidunt dolore cum natus error, placeat blanditiis dolorem, officia
            nobis libero odit neque, deleniti ab.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
