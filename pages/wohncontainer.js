import React from 'react'
import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerContainer from "../data/containerbanner.json"
import introContainer from "../data/containerIntro.json"
const WohnContainer = () => {
  const {wohncontainer} =bannerContainer
  const {wohncontainers} =introContainer
  return (
    <div>
        <ContainerInto data={wohncontainers}></ContainerInto>
        <ContainerModal data={wohncontainer}></ContainerModal>
    </div>
  )
}

export default WohnContainer