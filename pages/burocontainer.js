import React from "react";

import ContainerInto from "../components/ContainerInto";

import introContainer from "../data/containerIntro.json";

import WhyWeComponent from "../components/WhyWeComponent";

import ContainerColorSelector from "../components/ContainerColorSelector";
import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import HomePageShop from "../components/HomePageShop";
import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from "../components/ContainerDetail";
import buroData from "../data/ShopDeutsch.json";
const VideoCorausel = dynamic(() => import("../components/VideoCorausel"));
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const burofilter = buroData.filter(
    (intro) =>
      intro.category === "burocontainer" || intro.category === "special"
  );

  const { buroconteiner } = introContainer;

  return (
    <div>
      <ContainerInto data={buroconteiner}/>
      <HomePageShop data={burofilter}/>

      {/* <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div> */}

      <ContainerColorSelector
        data={BuroContarinerColorSelector}
      />
      <WhyWeComponent/>
      <ContainerAnimation/>
      <ContainerDetail/>
    </div>
  );
};

export default Burocontaıner;
