import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentWohnContainer from '../../components/MenuComponents/MenuContentWohnContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'

import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Wohncontainer = () => {
  const {wohncontainer} = MenuBannersData
  const {wohncontainerContent} = MenuContentData
  return (
    <div>
      <MenuBanner data={wohncontainer}></MenuBanner>
      <MenuContentWohnContainer data={wohncontainerContent}></MenuContentWohnContainer>
     <MenuContact data={"Fordern Sie jetzt Ihren Wohncontainer an!"}></MenuContact>
    </div>
  )
}

export default Wohncontainer