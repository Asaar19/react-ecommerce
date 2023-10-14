import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ListView = ({ products }) => {
  return (
    <div className="padding-100">
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <>
          <div className="row mb-4">
            <div className="col-md-4">
              <figure className="mb-0">
                <img src={image} alt={name} className="img-fluid list-view-img"/>
              </figure>
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <h3 className="card-name">{name}</h3>
              <p>
                <FormatPrice price={price} />
              </p>
              <p>{description.slice(0, 70)}...</p>

              <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <button className="theme-btn">Read More</button>
                </NavLink>
            </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ListView;
