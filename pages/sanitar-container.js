import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
const SanitaContainer = () => {
  const {sanitacontainer} =bannerContainer
  const {sanitacontainers} =introContainer
  return (
    <div>
        <ContainerInto data={sanitacontainers}></ContainerInto>
        <ContainerModal data={sanitacontainer}></ContainerModal>
    </div>
  )
}

export default SanitaContainer