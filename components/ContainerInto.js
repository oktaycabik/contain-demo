import React, { useRef } from "react";
import Image from "next/image";

const ContainerInto = () => {
  
  return (
    <div className='intro-img vh-100'  style={{ backgroundImage: `url(https://www.containhaus.de/assets/img/FrontPage/BuroMainpageUpdate.webp)` }}>
    <div className="intro-content">
    <h1 className="mt-1 fw-bold">Burocontainer</h1>
    <h5 className="mt-1 fw-bolder text-danger">Direkt ab Werk</h5>
    <h5 className="mt-2 text-light">Wo Sie auch sind, Ihr Bürocontainer kommt immer mit!</h5>
    <button className="intro-button">HIER GEHT'S WEITTER</button>
    </div>
  </div>
  );
};

export default ContainerInto;
