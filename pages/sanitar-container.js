import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
import alleModal from "../data/containerallemodel.json"
import AlleModal from '../components/AlleModal'
import WhyWeComponent from '../components/WhyWeComponent'
import ContainerColorSelector from '../components/ContainerColorSelector'
import SanitarContarinerColorSelector from "../data/Color-Selector/SanitarContainerColor.json"
import ContainerAnimation from '../components/ContainerAnimation'
import useOnScreen from "../utils/utils";
import dynamic from 'next/dynamic'
import ContainerDetail from '../components/ContainerDetail'


const VideoCorausel = dynamic(() => import('../components/VideoCorausel'))

const SanitaContainer = () => {
  const [isChild3Ref, setIsChild3Ref] =  React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);

  React.useEffect(() => {
    if (!isChild3Ref)
        setIsChild3Ref(child3RefValue);
 }, [child3RefValue])
  const {sanitacontainer} =bannerContainer
  const {sanitacontainers} =introContainer
  const {sanitacontainerModal}=alleModal
  return (
    <div>
        <ContainerInto data={sanitacontainers}></ContainerInto>
        <ContainerModal data={sanitacontainer}></ContainerModal>
        
        <AlleModal data={sanitacontainerModal}></AlleModal>
        <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div>
        <ContainerColorSelector data={SanitarContarinerColorSelector}></ContainerColorSelector>
      <ContainerAnimation></ContainerAnimation>
      <ContainerDetail></ContainerDetail>
    </div>
  )
}

export default SanitaContainer