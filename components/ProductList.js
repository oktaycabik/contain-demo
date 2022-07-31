import React from "react";
import Link from "next/link";
import Image from 'next/image'
const ProductList = ({ product }) => {
  return (
    <>
      <div className="col-md-6 col-12 col-lg-3 mb-4 mb-lg-0 gx-3 mt-2">
        <div className="card text-black">
          <Image width={306} height={229} src={product.image.ima1} className="card-img-top" alt="iPhone" />
          <div className="card-body card-info">
            <div className="text-center mt-1 ">
              <h4 className="card-title">{product.title}</h4>
              <h5 className="text-dark mb-1 pb-3">
                {product.content.text5}
              </h5>
              <h6 className="card-title mb-1 pb-3">{product.content.text2}</h6>
              <h6 className="card-title mb-1 pb-3">{product.content.text3}</h6>
              <h6 className="card-title mb-1 pb-3">{product.content.text6}</h6>
            </div>

            <div className="d-flex flex-row  bottom-btn">
              <Link href="/kontakt">
                <button
                  type="button"
                  className="btn btn-ligtt flex-fill me-1"
                  data-mdb-ripple-color="dark"
                >
                  Kontakt
                </button>
              </Link>

              <button type="button" className="btn btn-dark flex-fill ms-1">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
