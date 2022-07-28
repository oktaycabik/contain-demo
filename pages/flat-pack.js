import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
const Shop= () => {
  const {flatpackcontainer} =bannerContainer
  const {flatpackcontainers} =introContainer
  return (
    <div>
        <ContainerInto data={flatpackcontainers}></ContainerInto>
        <ContainerModal data={flatpackcontainer}></ContainerModal>
    </div>
  )
}

export default Shop