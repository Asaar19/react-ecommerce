import React, { useState } from "react";

const MyImages = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12 images-col">
            {imgs.map((curElem, id) => {
              return (
                <figure>
                  <img
                    src={curElem.url}
                    alt={curElem.filename}
                    key={id}
                    className="img-fluid"
                    onClick={() => setMainImage(curElem)}
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <img src={mainImage.url} alt="" className="img-fluid main-image" />
      </div>
    </div>
  );
};

export default MyImages;
