import Link from "next/link";
import { useRouter } from "next/router";
import windowSize from "../utils/windowSize";
import Image from "next/image"
const ContainerInto = ({ data }) => {
  const [width] = windowSize();

  const router = useRouter();
  const test = () => {
    if (router.asPath === "/") {
      if (width < 768) {
        return data.mobileImage;
      }
      return data.image;
    } else {
      if (width < 768) {
        return data.mobileImage1;
      }
      return data.image1;
    }
  };


  return (
  
  <>
     <div className="intro-img" style={{ backgroundImage: `url(${test()})` }}>
       <div className="intro-content">
        <h1 className="mt-1 fw-bold">{data.title.second}</h1>

        <h5 className="mt-1  text-danger">Direkt ab Werk</h5>
         <h5 className="mt-2 text-light">{data.content.first}</h5>
        <Link href={`${data.href}`}>
           <button className="intro-button">HIER GEHT'S WEITTER</button>
         </Link>
       </div>
     </div>
  
  </>
   
  );
};

export default ContainerInto;
