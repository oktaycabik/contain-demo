import React from 'react'
import ContainerInto from '../components/ContainerInto'
import bannerContainer from "../data/containerbanner.json"
import ContainerModal from '../components/ContainerModal'
import introContainer from "../data/containerIntro.json"
import alleModal from "../data/containerallemodel.json"
import AlleModal from '../components/AlleModal'
import WhyWeComponent from '../components/WhyWeComponent'
const SanitaContainer = () => {
  const {sanitacontainer} =bannerContainer
  const {sanitacontainers} =introContainer
  const {sanitacontainerModal}=alleModal
  return (
    <div>
        <ContainerInto data={sanitacontainers}></ContainerInto>
        <ContainerModal data={sanitacontainer}></ContainerModal>
        <AlleModal data={sanitacontainerModal}></AlleModal>
        <WhyWeComponent></WhyWeComponent>
    </div>
  )
}

export default SanitaContainer