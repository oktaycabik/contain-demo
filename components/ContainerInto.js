import React, { useRef } from "react";
import Image from "next/image";

const ContainerInto = () => {
  return (
    <div className="position-relative justify-content-center aling-items-center d-flex">
      <img
        className="vh-100 w-100"
        src="https://i.pinimg.com/736x/fd/df/30/fddf30f3c931230f91b6a588cb3db737.jpg"
        alt=""
      />
      <div id="custom" className="position-absolute mt-5 top-0 custom col-4">
        <h1>Bürocontainer</h1>
        <h5 className="text-danger mt-1 direkt-ab">Direkt ab Werk</h5>
        <div className="motto text-light mt-1">
          Wo sie aunch sind, Ihr Bürocontainer Kommt immer mit!
        </div>
      </div>
    </div>
  );
};

export default ContainerInto;
