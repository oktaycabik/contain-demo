/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="medium-footer">
        <div className="container ">
            <div className="footer-top">
                <img className="footer-logo"  src="https://www.containhaus.de/assets/img/RedBlack.webp"/>
            </div>
          <div className="row justify-content-between">
            <div className="col-6 aling-items-center">
              <h5 className="contact-tag">KONTAKTIEREN SIE UNS</h5>

              <div>Am Huchtert 44, 58456 Witten Deutschland</div>

              <div className="footer-info">
                <div>
                  <div>+49 2302 889 4880</div>
                </div>
                <div>
                  <div>+49 173 622 1062</div>
                </div>
                <div>
                  <span>info@containhaus.de</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 aling-items-center">
              <div className="footer-info">
                <div>
                  <span className="footer-contact-title">Inhaber:</span>
                  <span className="footer-info-text">Abraham Wach</span>
                </div>
                <div>
                  <span className="footer-contact-title">BANKNAME:</span>
                  <span className="footer-info-text">
                    Volksbank Sprockhövel
                  </span>
                </div>
                <div>
                  <span className="footer-contact-title">SWIFTCODE:</span>
                  <span className="footer-info-text">GENODEM1SPO</span>
                </div>
                <div>
                  <span className="footer-contact-title">KONTOINHABER:</span>
                  <span className="footer-info-text">
                    CONTAIN HAUS CONTAINER
                  </span>
                </div>
                <div>
                  <span className="footer-contact-title">IBAN:</span>
                  <span className="footer-info-text">
                    DE4145 2615 4700 1398 6200
                  </span>
                </div>
                <div>
                  <span className="footer-contact-title">Steuernummer:</span>
                  <span className="footer-info-text">348/5203/3253</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-footer-bot ">
            <h5>IMPRESSUM</h5>
            <h5>ÜBER UNS</h5>
            <h5>FAQ</h5>
            <h5>AGB</h5>
            <h5>CATALOG HERUNTERLADEN</h5>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />
      <div className="footer-bottom">

  
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
      </div>
      </div>
    </div>
  );
};
export default Footer;
