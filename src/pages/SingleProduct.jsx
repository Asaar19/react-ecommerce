import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
// import PageNavigation from "../components/PageNavigation";
import MyImages from "../components/MyImages";
import FormatPrice from "../Helpers/FormatPrice";
// import { TbTruckDelivery, TbReplace } from "react-icons/tb";
// import { MdSecurity } from "react-icons/md";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();


  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="">Loading....</div>;
  }

  return (
    <>
      {/* <PageNavigation title={name}></PageNavigation> */}

      <section className="padding-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <MyImages imgs={image} alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="product-title">{name}</h2>
              <Star stars={stars} reviews={reviews} />
              <p>
                MRP:
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p>
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>

              <div className="row mb-4">
                <div className="col-md-4 text-center">
                  <p className="mb-0">Free Delivery</p>
                  <LocalShippingIcon/>
                </div>
                <div className="col-md-4 text-center">
                  <p className="mb-0">30 Days Replacement</p>
                  <AttachMoneyIcon/>
                </div>

                <div className="col-md-4 text-center">
                  <p className="mb-0">2 Year Warranty</p>
                  <SecurityIcon/>
                </div>
              </div>
              <p>
                Available: <b>{stock > 0 ? "In Stock" : "Not Available"}</b>
              </p>
              <p>
                ID: <b>{id}</b>
              </p>
              <p>
                Company: <b>{company}</b>
              </p>

              <hr />

              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
