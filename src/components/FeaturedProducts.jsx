// import { useProductContext } from "../context/productcontex";
import Product from "../pages/Product";
import { useProductContext } from "../context/ProductContext";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <section className="padding-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="sub-heading">Check Now</h5>
            <h2>Our Feature Products</h2>
            <div className="row mt-5">
              {featureProducts.map((curElem, id) => {
                return (
                  // <div className="col-md-4">
                  <Product key={curElem.id} {...curElem} />
                  // </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
