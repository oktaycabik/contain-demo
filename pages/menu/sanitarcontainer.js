import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuSanitarContainer from '../../components/MenuComponents/MenuSanitarContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'

import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Sanitarcontainer = () => {
  const {sanitarcontainer} = MenuBannersData
  const {sanitacontainerContent} = MenuContentData
  return (
    <div>
      <MenuBanner data={sanitarcontainer}></MenuBanner>
      <MenuSanitarContainer data={sanitacontainerContent}></MenuSanitarContainer>
     <MenuContact data={"Fordern Sie jetzt Ihren Sanitärcontainer an!"}></MenuContact>
    </div>
  )
}

export default Sanitarcontainer