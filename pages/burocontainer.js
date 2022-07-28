import React from 'react'

import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerConttainer from "../data/containerbanner.json"
import introContainer from "../data/containerIntro.json"
import alleModal from "../data/containerallemodel.json"
import AlleModal from '../components/AlleModal'
const Burocontaıner = () => {
 
  const {burocontainer}=bannerConttainer
  const {buroconteiner}=introContainer
  const {burocontainerModal}=alleModal
  return (
    <div>
        <ContainerInto data={buroconteiner} ></ContainerInto>
        <ContainerModal data={burocontainer}></ContainerModal>
        <AlleModal data={burocontainerModal}></AlleModal>
    </div>
  )
}

export default Burocontaıner