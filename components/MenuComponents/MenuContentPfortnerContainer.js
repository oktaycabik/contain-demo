import React from "react";

const MenuContentPfortnerContainer = ({data}) => {
  return (
    <>
      <header>
      
          <div>
            <div className="container ">
              <div className="row ">
                <div className="col-lg-12  ">
                  <div className="caption ml-0 mr-0 p-4  ">
                    <h1 className=" text-dark d-flex justify-content-center ">
                      {data.title.first}
                    </h1>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.first}
                    </p>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.second}
                    </p>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.third}
                    </p>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.forth}
                    </p>
                    <h2 className="text-dark mt-3 mb-3  ">
                      {data.title.second}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image1} />
                      </div> */}
                      <div className="col-12">
                        <p className="mt-10 fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.third}
                    </h2>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.seventh}
                    </p>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.forth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image2} />
                      </div> */}
                      <div className="col-12">
                        <p className="mt-10 fz-20 text-justify text-dark">
                          {data.content.eidth}
                        </p>
                        <p className="mt-10 fz-20 text-justify text-dark">
                          {data.content.ninth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  ">{data.title.fifth}</h2>
                    <p className="mt-10 fz-20 text-justify text-dark">
                      {data.content.tenth}
                    </p>

                    <h2 className=" text-dark ">{data.title.sixth}</h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image3} />
                      </div> */}
                      <div className="col-12">
                        <p className="mt-10 fz-20 text-justify text-dark">
                          {data.content.eleventh}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark ">{data.title.seventh}</h2>
                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                        ??? Durch den Preisvorteil sind Pf??rtnercontainer
                        budgetfreundlich.
                      </li>
                      <li className="mt-2">
                        ??? Es ist eine gute Unterhaltung f??r diejenigen, die
                        Freude an Montage- und Reparaturarbeiten haben.
                      </li>
                      <li className="mt-2">
                        ??? Mit den Pf??rtnercontainern sind Sie mobil und
                        unabh??ngig. Wann immer Sie m??chten, k??nnen Sie Ihren
                        Container nehmen und ??berall hin mitnehmen, genau wie
                        Ihren Rucksack, und die Freiheit genie??en.
                      </li>
                      <li className="mt-2">
                        ??? Den Pf??rtnercontainer k??nnen Sie beliebig gestalten
                        und T??r und Fenster beliebig platzieren.
                      </li>
                      <li className="mt-2">
                        ??? Einer der gr????ten Vorteile der Container von Contain
                        Haus Pf??rtnercontainer ist ihre hohe Isolierung.
                      </li>
                      <li className="mt-2">
                        ??? Container Haus Pf??rtnercontainer sind so konstruiert,
                        dass sie Erdbeben der St??rke 9,00 standhalten.
                      </li>
                      <li className="mt-2">
                        ??? Contain Haus Pf??rtnercontainer aus Edelstahl bleiben
                        ??ber Jahrzehnte unversehrt.
                      </li>
                      <li className="mt-2">
                        ??? Mit ihrer Faserzementbasis sind die Containerb??den von
                        Pf??rtnercontainer sehr solide und von Beton nicht zu
                        unterscheiden.
                      </li>
                      <li className="mt-2">
                        ??? Die untere und obere Fahrgestellbreite der
                        Pf??rtnercontainer betr??gt 15 cm.
                      </li>
                      <li className="mt-2">
                        ??? Pf??rtnercontainer sind hitzebest??ndig und wasserdicht.
                      </li>
                      <li className="mt-2">
                        ??? Die Isolierung ist mit den 5 cm dicken
                        Sandwichpaneelen, die die W??nde bilden, auf sehr hohem
                        Niveau.
                      </li>
                      <li className="mt-2">
                        ??? Pf??rtnercontainer haben eine gute Leistung im
                        Feuchtigkeits- und Schallschutz.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </header>
    </>
  );
};

export default MenuContentPfortnerContainer;
