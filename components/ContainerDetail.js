import React from "react";
import Link from "next/link";
import data from "../data/ContainerDetail.json";
const ContainerDetail = () => {
  return (
    <div>
      <div className="container-fluid view-height bdbdb">
        <div className="row">
          <div className="col-lg-6 col-md-10 mt-3 pt-3 ">
            <div className="caption hmone p-4 m-4">
              <h5 className="detail-title text-45">{data.title.first}</h5>
              <Link href="#">
                <h1 data-splitting className="detail-subtitle text-45">
                  {data.title.second}
                </h1>
              </Link>

              <p className="mt-1">
                {data.content.first} <br />
                {data.content.second}
              </p>

              <Link href="/assets/img/TeknikDetaylar.pdf">
                <a className="detail-btn mt-3" id="PdfDetail" target="_blank">
                  <span className="text-light">Weiterlesen</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 img-fluid ">
            <img
              className="detail-img"
              src="/assets/img/slid/n/TeknikGorsel.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
