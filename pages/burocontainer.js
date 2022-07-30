import React from 'react'

import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerConttainer from "../data/containerbanner.json"
import introContainer from "../data/containerIntro.json"
import alleModal from "../data/containerallemodel.json"
import AlleModal from '../components/AlleModal'
import WhyWeComponent from '../components/WhyWeComponent'
import BeforeAndAfterSlider from '../components/BeforeAndAfterSlider'
import ContainerColorSelector from '../components/ContainerColorSelector'
import BuroContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json"
const Burocontaıner = () => {
 
  const {burocontainer}=bannerConttainer
  const {buroconteiner}=introContainer
  const {burocontainerModal}=alleModal
  return (
    <div>
        <ContainerInto data={buroconteiner} ></ContainerInto>
        {/* <BeforeAndAfterSlider></BeforeAndAfterSlider> */}
        <ContainerModal data={burocontainer}></ContainerModal>
        <WhyWeComponent></WhyWeComponent>
        <AlleModal data={burocontainerModal}></AlleModal>
        <ContainerColorSelector data={BuroContarinerColorSelector}></ContainerColorSelector>
    </div>
  )
}

export default Burocontaıner