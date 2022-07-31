import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
     <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top transparan">
        <div className="container-fluid ">
          <div>
            <Link href="/">
              <a className="navbar-brand" href="#">
                <img
                  height={72}
                  width={120}
                  src="https://www.containhaus.de/assets/img/RedBlack.webp"
                  alt=""
                />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center d-flex">
              <li className="nav-item">
                <Link href="/burocontainer">
                  <a className="nav-link" aria-current="page" href="#">
                    Bürocontainer
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/wohncontainer">
                  <a className="nav-link" href="#">
                    XL Wohncontainer
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/sanitar-container">
                  <a className="nav-link">Sanitär Container</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/flat-pack">
                  <a className="nav-link">Flat Pack</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/special-edition">
                  <a className="nav-link">Special Edition</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shop/all">
                  <a className="nav-link">Shop</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <Link href="/kontakt">
                  <a className="nav-link" href="">
                    Kontakt
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
    </>
   
  );
};

export default Header;
