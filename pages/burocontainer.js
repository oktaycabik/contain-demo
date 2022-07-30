import React from "react";

import ContainerInto from "../components/ContainerInto";
import ContainerModal from "../components/ContainerModal";
import bannerConttainer from "../data/containerbanner.json";
import introContainer from "../data/containerIntro.json";
import alleModal from "../data/containerallemodel.json";
import AlleModal from "../components/AlleModal";
import WhyWeComponent from "../components/WhyWeComponent";
import BeforeAndAfterSlider from "../components/BeforeAndAfterSlider";
import ContainerColorSelector from "../components/ContainerColorSelector";
import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";

import useOnScreen from "../utils/utils";
import dynamic from 'next/dynamic'
import ContainerDetail from "../components/ContainerDetail";
const VideoCorausel = dynamic(() => import('../components/VideoCorausel'))
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);

  const { burocontainer } = bannerConttainer;
  const { buroconteiner } = introContainer;
  const { burocontainerModal } = alleModal;
  return (
    <div>
      <ContainerInto data={buroconteiner}></ContainerInto>
      {/* <BeforeAndAfterSlider></BeforeAndAfterSlider> */}
      <ContainerModal data={burocontainer}></ContainerModal>
      <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div>
      <WhyWeComponent></WhyWeComponent>
      <AlleModal data={burocontainerModal}></AlleModal>
      <ContainerColorSelector
        data={BuroContarinerColorSelector}
      ></ContainerColorSelector>
      <ContainerAnimation></ContainerAnimation>
      <ContainerDetail></ContainerDetail>
      
    </div>
  );
};

export default Burocontaıner;
