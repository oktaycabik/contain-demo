import React from 'react'
import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerContainer from "../data/containerbanner.json"
const WohnContainer = () => {
  const {wohncontainer} =bannerContainer
 
  return (
    <div>
        <ContainerInto></ContainerInto>
        <ContainerModal data={wohncontainer}></ContainerModal>
    </div>
  )
}

export default WohnContainer