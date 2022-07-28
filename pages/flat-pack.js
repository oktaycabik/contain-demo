import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
const Shop= () => {
  const {flatpackcontainer} =bannerContainer
  return (
    <div>
        <ContainerInto></ContainerInto>
        <ContainerModal data={flatpackcontainer}></ContainerModal>
    </div>
  )
}

export default Shop