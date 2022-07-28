import React from 'react'
import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerConttainer from "../data/containerbanner.json"
import introContainer from "../data/containerIntro.json"

const Burocontaıner = () => {
 
  const {burocontainer}=bannerConttainer
  const {buroconteiner}=introContainer
  return (
    <div>
        <ContainerInto data={buroconteiner} ></ContainerInto>
        <ContainerModal data={burocontainer}></ContainerModal>
    </div>
  )
}

export default Burocontaıner