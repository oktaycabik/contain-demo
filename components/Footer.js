/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <img className="logo" src="/assets/img/RedBlack.webp" />
        </div>
        <div className="footer-mid ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-light">
                <h6>KONTAKTIEREN SIE UNS</h6>
                <span className="text-light ">
                  Am Huchtert 44, 58456 Witten Deutschland
                </span>
                <p className="text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" me-2 bi bi-telephone-forward-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <a href="tel:+4923028894880" className="  fw-700">
                    +49&nbsp;2302&nbsp;889&nbsp;4880
                  </a>
                </p>
                <p className="text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" me-2 bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <a href="tel:+4923028894880" className=" fw-700">
                    +49&nbsp;173&nbsp;622&nbsp;1062
                  </a>
                </p>
                <p className="text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" me-2 bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <a href="mailto:info@containhaus.de" className=" fw-700">
                    info@containhaus.de
                  </a>
                </p>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-12 col-12 mt-2 ">
                <p className=" text-light">
                  <span className="fw-700">Inhaber:</span> Abraham Wach
                  <br />
                  <span className="fw-700">BANKNAME:</span> Volksbank
                  Sprockhövel
                  <br />
                  <span className="fw-700">SWIFTCODE:</span> GENODEM1SPO
                  <br />
                  <span className="fw-700">KONTOINHABER:</span> CONTAIN HAUS
                  CONTAINER
                  <br />
                  <span className="fw-700">IBAN:</span> DE4145 2615 4700 1398
                  6200
                  <br />
                  <span className="fw-700">Steuernummer. :</span> 348/5203/3253
                </p>
              </div>
            </div>
            <div className="footer-mid-bot">
              <div className="col-lg-12  pt-30 col-md-6 col-sm-10 text-center text-light">
                <Link href="impressum">
                  <a className="fz-20 fw-600 footer-bot-text">
                    IMPRESSUM
                    <span className="mx-3">|</span>
                  </a>
                </Link>
                <Link href="UberUns">
                  <a className=" fz-20 fw-600 footer-bot-text">
                    ÜBER UNS
                    <span className="mx-3">|</span>
                  </a>
                </Link>
                <Link href="FAQ">
                  <a className=" fz-20 fw-600 footer-bot-text">
                    FAQ
                    <span className="mx-3">|</span>
                  </a>
                </Link>

                <Link href="AGB">
                  <a className=" fz-20 fw-600 footer-bot-text">
                    AGB
                    <span className="mx-3"></span>
                  </a>
                </Link>
                <Link href="/assets/img/KATALOG.pdf">
                  <a
                    className=" mr-5 fz-20 fw-600  footer-bot-text"
                    target="_blank"
                  >
                    <br /> CATALOG HERUNTERLADEN
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bot pt-4 pb-5">
          <div className="container">
            <div className="row"> 
            <div className="col-lg-5 footer-text d-flex col-md-6 col-sm-12 text-light">
              <div>
                <li className="mx-2">
                  <a href="/FlatpackDetail">FlatPack</a>
                </li>
                <li className="mx-2">
                  <a href="/BurocontainerDetail">Bürocontainer</a>
                </li>
              </div>
              <div>
                <li className="mx-2">
                  <a href="/Wohncontainer">Wohncontainer</a>
                </li>

                <li className="mx-2">
                  <a href="/BaucontainerDetail">Baucontainer</a>
                </li>
              </div>
              <div>
                <li className="mx-2">
                  <a href="/XlWohncontainer">XL&nbsp;Wohncontainer</a>
                </li>

                <li className="mx-2">
                  <a href="/SanitarcontainerUndWCcontainer">Sanitärcontainer</a>
                </li>
              </div>
            </div>
            <div className="col-lg-4 footer-text d-flex col-md-6 col-sm-12 text-light   ">
              <div>
                <li className="mx-2">
                  <a href="/PfortnercontainerDetail">Pförtnercontainer</a>
                </li>
                <li className="mx-2">
                  <a href="/SpecialDetail">Specialcontainer</a>
                </li>
              </div>
              <div>
                <li className="mx-2">
                  <a href="/KafeKonteyner">Cafe-Container</a>
                </li>
                <li className="mx-2">
                  <a href="/Schulcontainer">Schulcontainer</a>
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 d-flex mt-2 mb-2  justify-content-center text-light">
              <Link href="https://www.facebook.com/ContainHaus">
                <a className="me-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://twitter.com/ContainHaus">
                <a className="me-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.instagram.com/containhaus/">
                <a className="me-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://tr.linkedin.com/company/contain-haus?trk=public_profile_experience-item_profile-section-card_image-click">
                <a className="me-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCDbpL6rsln1udSYWcTARyGg">
                <a className="me-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="white"
                    class="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <div className="row ">
          <div className="col-lg-2 col-md-2 col-12">
            <h5 className="mt-2 ">ÜBERSICHT</h5>
            <Link href="/menu/flat-pack">
              <div className="mt-2 footer-color">FlatPack</div>
            </Link>
            <Link href="/menu/wohncontainer">
              <div className="mt-2 footer-color">Wohncontainer</div>
            </Link>
            <Link href="/menu/burocontainer">
              <div className="mt-2 footer-color">Bürocontainer</div>
            </Link>
            <Link href="/menu/xlwonhcontainer">
              <div className="mt-2 footer-color">XL Wohncontainer</div>
            </Link>
            <Link href="/menu/sanitarcontainer">
              <div className="mt-2 footer-color">Sanitärcontainer</div>
            </Link>
            <Link href="/menu/pfortnercontainer">
              <div className="mt-2 footer-color">Pförtnercontainer</div>
            </Link>
            <Link href="/menu/specialcontainer">
              <div className="mt-2 footer-color">Specialcontainer</div>
            </Link>
            <Link href="/menu/cafe-container">
              <div className="mt-2 footer-color">Cafe-Container</div>
            </Link>
            <Link href="/menu/schulcontainer">
              <div className="mt-2 footer-color">Schulcontainer</div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-12">
            {" "}
            <h5 className="mt-2">KONTAKTIEREN SIE UNS</h5>
            <div className="mt-2 footer-color">
              Am Huchtert 44, 58456 Witten Deutschland
            </div>
            <div className="mt-3 footer-color">+49 2302 889 4880</div>
            <div className="mt-3 footer-color">+49 173 622 1062</div>
            <div className="mt-3 footer-color">info@containhaus.de</div>
          </div>
          <div className="col-lg-2 col-md-2 col-12 gx-5">
            {" "}
            <h5 className="mt-2">ÜBERSICHT</h5>
            <Link href="/impressum">
              <div className="mt-2">IMPRESSUM</div>
            </Link>
            <Link href="/uber-uns">
              <div className="mt-3">ÜBER UNS</div>
            </Link>
            <Link href="faq">
              <div className="mt-3">FAQ</div>
            </Link>
            <Link href="agb">
              <div className="mt-3">AGB</div>
            </Link>
            <Link href="catolog">
              <div className="mt-3">CATALOG HERUNTERLADEN</div>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 col-12 ">
            <div className="footer-top ">
              <img
                className="footer-logo"
                src="https://www.containhaus.de/assets/img/RedBlack.webp"
              />
            </div>
            <div className="mb-2">
              <div>Inhaber: Abraham Wach</div>
              <div>BANKNAME: Volksbank Sprockhövel</div>
              <div>SWIFTCODE: GENODEM1SPO</div>
              <div>KONTOINHABER: CONTAIN HAUS CONTAINER</div>
              <div>IBAN: DE4145 2615 4700 1398 6200</div>
              <div>Steuernummer. : 348/5203/3253</div>
            </div>

            <Link href="https://www.facebook.com/ContainHaus">
              <a className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </Link>
            <Link href="https://twitter.com/ContainHaus">
              <a className="ms-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </Link>
            <Link href="https://www.instagram.com/containhaus/">
              <a className="ms-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </Link>
            <Link href="https://tr.linkedin.com/company/contain-haus?trk=public_profile_experience-item_profile-section-card_image-click">
              <a className="ms-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCDbpL6rsln1udSYWcTARyGg">
              <a className="ms-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="white"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </Link>
          </div>
          <p className="mt-5 text-center">© 2022, Developed by Contain Haus</p>
        </div> */}
    </>
  );
};
export default Footer;
