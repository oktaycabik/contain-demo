import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const ContainerColorSelector = ({ data }) => {
  const [colorImgSrc, setColorImgSrc] = useState(data[1].image);
  const handleChangeColor = (src) => {
    setColorImgSrc(src);
  };
  console.log("data[1].class", data[1].class);
  return (
    <>
      <div className="row color-select justify-content-center">
        <div className="col-lg-7 d-flex mt-5 paddingg">
          <img width={950} height={500} className="" src={colorImgSrc} />
        </div>

        <div className="col-lg-3  gx-5 ">
          <div className="text-start">
          <h1 className="mb-4 justify-content-center d-flex ">Paint</h1>
          <div className="paint-icons">
            {data.map((color) => (
              <div
                style={{ backgroundImage: `${color.class}` }}
                className="container-style mx-1 d-flex justify-content-center"
                onMouseOver={() => handleChangeColor(color.image)}
                key={color.id}
              >
                <Image
                  className="img-fluid"
                  width={50}
                  height={50}
                  src={color.class}
                />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerColorSelector;
