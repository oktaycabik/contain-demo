import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
import WhyWeComponent from '../components/WhyWeComponent'
import ContainerColorSelector from '../components/ContainerColorSelector'
import SpecialContainerColorSelector from "../data/Color-Selector/SpecialContainerColor.json"
import ContainerAnimation from '../components/ContainerAnimation'

import useOnScreen from "../utils/utils";
import dynamic from "next/dynamic";

const VideoCorausel = dynamic(() => import("../components/VideoCorausel"));
const Burocontaıner = () => {
  const [isChild3Ref, setIsChild3Ref] = React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  const {specialeditation} =bannerContainer
  const {specialeditatons} =introContainer
  return (
    <div>
        <ContainerInto data={specialeditatons}></ContainerInto>
        <ContainerModal data={specialeditation}></ContainerModal>
        <WhyWeComponent></WhyWeComponent>
        <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div>
        <ContainerColorSelector data={SpecialContainerColorSelector}></ContainerColorSelector>
       <ContainerAnimation></ContainerAnimation>
    </div>
  )
}

export default Burocontaıner