import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentXlWohnContainer from '../../components/MenuComponents/MenuContentXlWohnContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'

import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Xlwonhcontainer = () => {
  const {xlWohnContainer} = MenuBannersData
  const {xlwohnContainerContent} = MenuContentData
  return (
    <div>
      <MenuBanner data={xlWohnContainer}></MenuBanner>
      <MenuContentXlWohnContainer data={xlwohnContainerContent}></MenuContentXlWohnContainer>
    <MenuContact data={"Fordern Sie jetzt Ihren XL-Wohncontainer an!"}></MenuContact>
    </div>
  )
}

export default Xlwonhcontainer