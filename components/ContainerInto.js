import React, { useRef } from "react";
import Image from "next/image";

const ContainerInto = ({src,content}) => {
  console.log('src', src)
  return (
    <div className="position-relative justify-content-center aling-items-center d-flex">
      <img
        className="vh-100 w-100"
        src={src}
        alt=""
      />
      <div id="custom" className="position-absolute mt-5 top-0 custom col-4">
        <h1>Bürocontainer</h1>
        <h5 className="text-danger mt-1 direkt-ab">Direkt ab Werk</h5>
        <div className="motto text-light mt-1">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ContainerInto;
