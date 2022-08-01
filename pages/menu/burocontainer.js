import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentBuroContainer from "../../components/MenuComponents/MenuContentBuroContainer"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
import MenuContact from '../../components/MenuComponents/MenuContact'
const Burocontainer = () => {
  const {burocontainer} = MenuBannersData
  const {burocontainerContent} = MenuContentData 
  
  return (
    <div>
     
       <MenuContentBuroContainer data={burocontainerContent}></MenuContentBuroContainer> 
       <MenuContact data={"Fordern Sie jetzt Ihren Bürocontainer an!"}></MenuContact>
    </div>
  )
}

export default Burocontainer