import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const Products = () => {

  return (
    <section className="padding-100 products-page">
      <div className="container">
        <div className="row">
        {/* <h1 class="theme-main-heading text-center mb-5">Our Products</h1> */}
          <div className="col-md-3">
            <FilterSection />
          </div>
          <div className="col-md-9">
            <div className="row">
              <Sort />
            </div>
            <div className="row">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
