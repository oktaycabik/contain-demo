import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentBuroContainer from "../../components/MenuComponents/MenuContentBuroContainer"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
const Burocontainer = () => {
  const {burocontainer} = MenuBannersData
  const {burocontainerContent} = MenuContentData 
  console.log('first', burocontainerContent)
  return (
    <div>
      <MenuBanner data={burocontainer}></MenuBanner>
       <MenuContentBuroContainer data={burocontainerContent}></MenuContentBuroContainer> 
    </div>
  )
}

export default Burocontainer