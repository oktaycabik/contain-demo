import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
const Burocontaıner = () => {
  const {specialeditation} =bannerContainer
  return (
    <div>
        <ContainerInto></ContainerInto>
        <ContainerModal data={specialeditation}></ContainerModal>
    </div>
  )
}

export default Burocontaıner