import React from 'react'
import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerContainer from "../data/containerbanner.json"
import introContainer from "../data/containerIntro.json"
import alleModal from "../data/containerallemodel.json"
import AlleModal from '../components/AlleModal'
import WhyWeComponent from '../components/WhyWeComponent'
import ContainerColorSelector from "../components/ContainerColorSelector"
import WohnContainerColorSelector from "../data/Color-Selector/WohnContainerColor.json"
const WohnContainer = () => {
  const {wohncontainer} =bannerContainer
  const {wohncontainers} =introContainer
  const {wohncontainerModal}=alleModal
  return (
    <div>
        <ContainerInto data={wohncontainers}></ContainerInto>
        <ContainerModal data={wohncontainer}></ContainerModal>
        <AlleModal data={wohncontainerModal}></AlleModal>
        <ContainerColorSelector data={WohnContainerColorSelector}></ContainerColorSelector>
        <WhyWeComponent></WhyWeComponent>
    </div>
  )
}

export default WohnContainer