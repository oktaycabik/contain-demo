import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
import WhyWeComponent from '../components/WhyWeComponent'
import ContainerColorSelector from '../components/ContainerColorSelector'
import SpecialContainerColorSelector from "../data/Color-Selector/SpecialContainerColor.json"
const Burocontaıner = () => {
  const {specialeditation} =bannerContainer
  const {specialeditatons} =introContainer
  return (
    <div>
        <ContainerInto data={specialeditatons}></ContainerInto>
        <ContainerModal data={specialeditation}></ContainerModal>
        <WhyWeComponent></WhyWeComponent>
        <ContainerColorSelector data={SpecialContainerColorSelector}></ContainerColorSelector>
    </div>
  )
}

export default Burocontaıner