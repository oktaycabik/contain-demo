import React from "react";
import ContainerInto from "../components/ContainerInto";
import ContainerModal from "../components/ContainerModal";
import bannerContainer from "../data/containerbanner.json";
import introContainer from "../data/containerIntro.json";
import alleModal from "../data/containerallemodel.json";
import AlleModal from "../components/AlleModal";
import WhyWeComponent from "../components/WhyWeComponent";
import ContainerColorSelector from "../components/ContainerColorSelector";
import WohnContainerColorSelector from "../data/Color-Selector/WohnContainerColor.json";
import ContainerAnimation from "../components/ContainerAnimation";
import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";
import ContainerDetail from "../components/ContainerDetail";

const VideoCorausel = dynamic(() => import("../components/VideoCorausel"));
const WohnContainer = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const { wohncontainer } = bannerContainer;
  const { wohncontainers } = introContainer;
  const { wohncontainerModal } = alleModal;

  return (
    <div>
      <ContainerInto data={wohncontainers}></ContainerInto>
      <ContainerModal data={wohncontainer}></ContainerModal>
      <AlleModal data={wohncontainerModal}></AlleModal>

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
