import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="padding-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="theme-main-heading text-center mb-5">Error 404</h2>
              <p className="text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Eaque nesciunt eos impedit explicabo <br/> repellat dolore quis in quae officiis commodi!</p>
              <Link to="/" className="theme-btn ">
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
