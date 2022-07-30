import React,{useState} from "react";
import Link from "next/link";
const ContainerColorSelector = ({data}) => {
    const [colorImgSrc, setColorImgSrc] = useState(data[1].image)
    const handleChangeColor=(src)=>{
        setColorImgSrc(src)
    }
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card p-5">
            <div className="card-title text-center">+ 210</div>
            <div className="card-title text-center">Farbtöne Machen</div>
            <div className="card-title text-center">individuell</div>
            <div className="card-text ">
            Bring Farbe ins spiel! Egal ob Anthrazit oder in Pink, Sie bestimmen welche Farbe ihr Container haben soll. Mit mehr als 210 Farbvariationen der RAL Pantone Katalog, können Sie ihren Container Lackieren lassen.
            </div>
            <img className="mt-2" src="/assets/img/slid/n/ContentSide.webp"/>
          </div>
        </div>
        <div className="col-lg-8">
            <div className="row">
           
              <img className="color-image" src={colorImgSrc}/>
            
         
            </div>
            <div className="mb-4 color-selector">
            {data.map(color=>(
                <div style={{backgroundImage:`${color.class}`}} className="container-style mx-4" onMouseOver={()=>handleChangeColor(color.image)} key={color.id}></div>
            ))}
            </div>
        </div>
        
      </div>
    </>
  );
};

export default ContainerColorSelector;
