import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      {/* <div className="container-fluid " >
        <div className="row">
          <div
            className="bg-white col-12 "
        
          >
            <div className="text-center ">
              <Link href="/assets/img/KATALOG.pdf">
                <u>
                <a className="nav-link">CATALOG HERUNTERLADEN</a>
                </u>
              </Link>
            </div>
          </div>

          <nav className="navbar change navbar-expand-lg mt-25" >

            <div className="container-fluid">


              <Link href="/de">
                <a className={`ml-5 logo`}>
                   />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
          
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar">
                  <i className="fas fa-bars fa-3x"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="/burocontainer">
                      <a className="nav-link">Bürocontainer</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/wohncontainer">
                      <a className="nav-link">XL Wohncontainer</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sanitarcontainer">
                      <a className="nav-link">Sanitär Container</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/flat-pack">
                      <a className="nav-link">Flat Pack</a>
                    </Link>
                  </li>
                  
                  
                  
                  <li className="nav-item">
                    <Link href="/SpecialEdition">
                      <a className="nav-link">Special Edition</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/shop/all">
                      <a className="nav-link">Shop</a>
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto "  >
                <Link href="/de">
                  <li className="nav-item">
                    <span
                      className="nav-link"                     
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="/assets/img/LangFlag/de.svg"
                        alt="" style={{ width: "20px", height: "20px" }}

                      />
                    </span>                    
                  </li>
                  </Link>
                  <li className="nav-item dropdown scrollable-menu-containerrrr"  >
                    <span
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Menu
                    </span>
                    <div className="dropdown-menu scrollable-menuuu">
                      <Link href="/FlatpackDetail">
                        <a className="dropdown-item">Flatpack</a>
                      </Link>
                      <Link href="/BurocontainerDetail">
                        <a className="dropdown-item">Bürocontainer</a>
                      </Link>
                      <Link href="/Wohncontainer">
                        <a className="dropdown-item">Wohncontainer</a>
                      </Link>
                      <Link href="/BaucontainerDetail">
                        <a className="dropdown-item">Baucontainer</a>
                      </Link>
                      <Link href="/XlWohncontainer">
                        <a className="dropdown-item">XL Wohncontainer</a>
                      </Link>
                      <Link href="/SanitarcontainerUndWCcontainer">
                        <a className="dropdown-item">Sanitärcontainer</a>
                      </Link>
                      <div className="d-none">
                        <Link href="/WcDuschContainer">
                          <a className="dropdown-item">Wc-Dusch Container</a>
                        </Link>
                      </div>
                      <Link href="/Schulcontainer">
                        <a className="dropdown-item">Schulcontainer</a>
                      </Link>
                      <Link href="/PfortnercontainerDetail">
                        <a className="dropdown-item">Pförtnercontainer</a>
                      </Link>
                      <Link href="/SpecialDetail">
                        <a className="dropdown-item">Specialcontainer</a>
                      </Link>
                      <Link href="/KafeKonteyner">
                        <a className="dropdown-item">Café-Container</a>
                      </Link>
                      <div className="d-none">
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Baustellencontainer </a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Sanitärcontainer</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Tagesbehälter</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Behälter des Lebens</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Verkaufsbehälter</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Bauerncontainer</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Containerhaus</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Cafeteria-Container</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Cafekan-Behälter</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Erdbebencontainer</a>
                        </Link>
                        <Link href="/KommtBald">
                          <a className="dropdown-item">Industriecontainer</a>
                        </Link>
                      </div>
                      <Link href="/UberUns">
                        <a className="dropdown-item">Über Uns </a>
                      </Link>
                      <Link href="/impressum">
                        <a className="dropdown-item">impressum </a>
                      </Link>
                      <Link href="/FAQ">
                        <a className="dropdown-item">FAQ </a>
                      </Link>
                      <Link href="/AGB">
                        <a className="dropdown-item">AGB </a>
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link href="/Kontakt">
                      <a className="nav-link">Kontakt</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>             
            </div>
          </nav>
        </div>
      </div> */}
     <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top transparan">
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
             
              <li  className="nav-item ms-10">
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
    </>
   
  );
};

export default Header;
