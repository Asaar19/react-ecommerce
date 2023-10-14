import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLast = index === array.length - 1;
      const separator = isLast ? "" : " / "; // Add a separator unless it's the last breadcrumb

      return (
        <React.Fragment key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
          {separator}
        </React.Fragment>
      );
    });


  return (
    <>
      <h2 className="theme-main-heading text-center crumbsTitle"> {crumbs}</h2>
      <div className="breadcrumbs"> <Link className="bread-home" to="/">Home</Link> / {crumbs}</div>
    </>
  );
};

export default Breadcrumbs;
