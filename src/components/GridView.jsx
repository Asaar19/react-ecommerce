import Product from "../pages/Product";

const GridView = ({ products }) => {
  return (
    <>
      <section className="padding-100">
        <div className="container">
          <div className="row g-3">
              {products.map((curElem) => {
                return <Product key={curElem.id} {...curElem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default GridView;
