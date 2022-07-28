import React from 'react'
import ContainerInto from '../components/ContainerInto'
import ContainerModal from '../components/ContainerModal'
import bannerConttainer from "../data/containerbanner.json"
const Burocontaıner = () => {
 
  const {burocontainer}=bannerConttainer
  console.log('first', burocontainer)
  return (
    <div>
        <ContainerInto ></ContainerInto>
        <ContainerModal data={burocontainer}></ContainerModal>
    </div>
  )
}

export default Burocontaıner