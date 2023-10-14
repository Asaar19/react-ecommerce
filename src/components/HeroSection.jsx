import { Link } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { title, image } = myData;

  return (
    <>
      <section className="padding-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="theme-main-heading">{title}</h1>
              <p className="theme-para mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolorum aut reiciendis fuga voluptatem temporibus consectetur,
                cumque, quae commodi blanditiis ullam fugit, deserunt sed eius!
                Nihil alias temporibus quia et.
              </p>
              <Link to="/products" className="theme-btn">
                Shop
              </Link>
            </div>
            <div className="col-md-6">
              <img src={image} alt="" className="image-style img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
