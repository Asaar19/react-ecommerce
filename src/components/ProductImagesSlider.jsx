import Slider  from "react-slick";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductImagesSlider = () => {
  const { products } = useProductContext();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show per view
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Custom component for previous arrow
    nextArrow: <NextArrow />, // Custom component for next arrow
  };

  // Custom component for previous arrow
  function PrevArrow(props) {
    return (
      <div
        {...props}
        className="slick-prev slick-arrow"
        style={{ left: "-30px", zIndex: 1 }}
      >
        {/* You can use an icon or any custom content for the previous arrow */}
        <i className="fa fa-chevron-left"></i>
      </div>
    );
  }

  // Custom component for next arrow
  function NextArrow(props) {
    return (
      <div
        {...props}
        className="slick-next slick-arrow"
        style={{ right: "-30px", zIndex: 1 }}
      >
        {/* You can use an icon or any custom content for the next arrow */}
        <i className="fa fa-chevron-right"></i>
      </div>
    );
  }

  return (
    <section className="padding-100">
      <div className="container">
        <div className="row">
          <h2 className="mb-5 text-center">Our Products</h2>
          <div className="col-md-12">
            <div className="slider  mb-5">
              <Slider {...sliderSettings}>
                {products.map((product) => (
                  <div className="col-md-4 images-slider-div mb-4" key={product.id}>
                    {/* <Link> */}
                    <h3>{product.name}</h3>
                    <img
                      className="img-fluid slider-images"
                      src={product.image}
                      alt={`Product ${product.id}`}
                    />
                    {/* </Link> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImagesSlider;
