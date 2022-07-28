import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'

const SanitaContainer = () => {
  const {sanitacontainer} =bannerContainer
  return (
    <div>
        <ContainerInto></ContainerInto>
        <ContainerModal data={sanitacontainer}></ContainerModal>
    </div>
  )
}

export default SanitaContainer