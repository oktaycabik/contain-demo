import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
import ContainerColorSelector from '../components/ContainerColorSelector'
import WhyWeComponent from '../components/WhyWeComponent'
import FlatPackContarinerColorSelector from "../data/Color-Selector/BuroContainerColor.json"
import ContainerAnimation from '../components/ContainerAnimation'

const Shop= () => {
  const {flatpackcontainer} =bannerContainer
  const {flatpackcontainers} =introContainer
  return (
    <div>
        <ContainerInto data={flatpackcontainers}></ContainerInto>
        <ContainerModal data={flatpackcontainer}></ContainerModal>
        <WhyWeComponent></WhyWeComponent>
        <ContainerColorSelector data={FlatPackContarinerColorSelector}></ContainerColorSelector>
         <ContainerAnimation></ContainerAnimation>
    </div>
  )
}

export default Shop