import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentSchulcontainerContainer from '../../components/MenuComponents/MenuContentSchulcontainerContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'

import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Schulcontainer = () => {
    const {schulcontainer} = MenuBannersData
    const {schulcontainerContent} = MenuContentData
  return (
    <div>
      <MenuBanner data={schulcontainer}></MenuBanner>
      <MenuContentSchulcontainerContainer data={schulcontainerContent}></MenuContentSchulcontainerContainer>
   <MenuContact data={"Fordern Sie jetzt Ihren Schulcontainer an!"}></MenuContact>
    </div>
  )
}

export default Schulcontainer