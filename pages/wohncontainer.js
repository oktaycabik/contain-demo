import React from "react";
import ContainerInto from "../components/ContainerInto";

import introContainer from "../data/containerIntro.json";

import WhyWeComponent from "../components/WhyWeComponent";
import ContainerColorSelector from "../components/ContainerColorSelector";
import WohnContainerColorSelector from "../data/Color-Selector/WohnContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from "../components/ContainerDetail";
import HomePageShop from "../components/HomePageShop";
import intro2Data from "../data/ShopDeutsch.json"; 
const VideoCorausel = dynamic(() => import("../components/VideoCorausel"));
const WohnContainer = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const burofilter = intro2Data.filter(intro => intro.category === "burocontainer" || intro.category ===  "special" )  
  
  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);

  const { wohncontainers } = introContainer;


  return (
    <div>
      <ContainerInto data={wohncontainers}></ContainerInto>
  
    <HomePageShop data={burofilter}></HomePageShop>

      <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div>
      <ContainerColorSelector
        data={WohnContainerColorSelector}
      ></ContainerColorSelector>
      <WhyWeComponent></WhyWeComponent>
      <ContainerAnimation></ContainerAnimation>
      <ContainerDetail></ContainerDetail>
    </div>
  );
};

export default WohnContainer;
