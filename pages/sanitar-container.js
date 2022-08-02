import React from 'react'
import ContainerInto from '../components/ContainerInto'

import introContainer from "../data/containerIntro.json"


import WhyWeComponent from '../components/WhyWeComponent'
import ContainerColorSelector from '../components/ContainerColorSelector'
import SanitarContarinerColorSelector from "../data/Color-Selector/SanitarContainerColor.json"
import ContainerAnimation from '../components/ContainerAnimation'
import useOnScreen from "../utils/utils";
import dynamic from 'next/dynamic'
import ContainerDetail from '../components/ContainerDetail'
import intro2Data from "../data/ShopDeutsch.json"; 
import HomePageShop from '../components/HomePageShop'

const VideoCorausel = dynamic(() => import('../components/VideoCorausel'))

const SanitaContainer = () => {
  const [isChild3Ref, setIsChild3Ref] =  React.useState(false);
  const child3Ref = React.useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const Sanitarfilter = intro2Data.filter(intro => intro.category === "sanitarcontainer")
  React.useEffect(() => {
    if (!isChild3Ref)
        setIsChild3Ref(child3RefValue);
 }, [child3RefValue])

  const {sanitacontainers} =introContainer
  
  return (
    <div>
        <ContainerInto data={sanitacontainers}></ContainerInto>
      <HomePageShop data={Sanitarfilter}></HomePageShop>
       
        
        <div ref={child3Ref}>{child3RefValue && <VideoCorausel />}</div>
        <ContainerColorSelector data={SanitarContarinerColorSelector}></ContainerColorSelector>
        <WhyWeComponent></WhyWeComponent>
      <ContainerAnimation></ContainerAnimation>
      <ContainerDetail></ContainerDetail>
    </div>
  )
}

export default SanitaContainer