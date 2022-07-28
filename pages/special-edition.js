import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
const Burocontaıner = () => {
  const {specialeditation} =bannerContainer
  const {specialeditatons} =introContainer
  return (
    <div>
        <ContainerInto data={specialeditatons}></ContainerInto>
        <ContainerModal data={specialeditation}></ContainerModal>
    </div>
  )
}

export default Burocontaıner