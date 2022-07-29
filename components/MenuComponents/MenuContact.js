import React from "react";
import Link from "next/link";
const MenuContact = ({data}) => {
  return (
    <div>
      <div className="container-fluid bg-white text-center">
        <div className="row">
          <div className="col-lg-12  ">
            <div className="caption ml-0 mr-0 p-4  ">
              <h3 className="mb-4 text-dark d-flex justify-content-center">{data}</h3>

              <Link href="/kontakt">
                <a className="menu-contact-button">Angebote vergleichen</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContact;
