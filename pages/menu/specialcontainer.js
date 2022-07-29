import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentSpecial from '../../components/MenuComponents/MenuContentSpecial'
import MenuContact from '../../components/MenuComponents/MenuContact'

import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Specialcontainer = () => {
  const {specialcontainerContent} = MenuContentData
  const {special} = MenuBannersData
  return (
    <div>
      <MenuBanner data={special}></MenuBanner>
      <MenuContentSpecial data={specialcontainerContent}></MenuContentSpecial>
     <MenuContact data={"Fordern Sie jetzt Ihren Special container an!"}></MenuContact>
    </div>
  )
}

export default Specialcontainer