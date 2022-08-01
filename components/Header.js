import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <div className="container">
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto pl-lg-5 pl-0 text-center">
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
              </ul>
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item cta-btn">
                  <a 
                  className="nav-link"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item cta-btn">
                  <Link href="/kontakt">
                    <a className="nav-link" href="">
                      Kontakt
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
        <ul className="navbar-nav ms-auto pl-lg-5 pl-0 ">
                <li className="nav-item">
                  <Link href="/menu/burocontainer">
                    <a className="nav-link" aria-current="page" href="#">
                      Bürocontainer
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/xlwohncontainer">
                    <a className="nav-link" href="#">
                      XL Wohncontainer
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/wohncontainer">
                    <a className="nav-link" href="#">
                    Wohncontainer
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/sanitarcontainer">
                    <a className="nav-link">Sanitär Container</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/flat-pack">
                    <a className="nav-link">Flat Pack</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/specialcontainer">
                    <a className="nav-link">Special Edition</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/schulcontainer">
                    <a className="nav-link">Scuhulcontainer</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/pfortnercontainer">
                    <a className="nav-link">Pfortcontainer</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/menu/cafe-container">
                    <a className="nav-link">Cafe Container</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/shop/all">
                    <a className="nav-link">Shop</a>
                  </Link>
                </li>
              </ul>
           
        </div>
      </div>
      {/* <header className="fixed-top">
        <div className="navbar-catalog">
          <Link href="https://www.containhaus.de/assets/img/KATALOG.pdf">
            CATALOG HERUNTERLADEN
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg navbar-custom navbar-light bg-light  ">
          <div className="container-fluid navbar">
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
                className="navbar-toggler me-auto"
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

            <div
              className="collapse navbar-collapse  justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
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
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex">
                <li className="nav-item ms-10">
                <img src="/assets/img/LangFlag/de.svg"/>
                </li>
                <li className="nav-item ms-10">
                  <Link href="/kontakt">
                    <a className="nav-link" href="">
                      Menu
                    </a>
                  </Link>
                </li>
                <li className="nav-item ms-10">
                  <Link href="/kontakt">
                    <a className="nav-link" href="">
                      Kontakt
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}
    </>
  );
};

export default Header;
