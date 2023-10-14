import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <div className="col-md-4">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <img src={image} alt="" className="img-fluid product-img" />
          <div className="row">
            <p className="card-catergory">{category}</p>
            <div className="col-md-7 card-name">{name}</div>
            <div className="col-md-5 card-price">{<FormatPrice price={price} />}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
