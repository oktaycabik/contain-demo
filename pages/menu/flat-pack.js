import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentFlatPackContainer from '../../components/MenuComponents/MenuContentFlatPackContainer'
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
const Flatpack = () => {
    const {flatpack} = MenuBannersData
    const {flatpackContent} = MenuContentData
    return (
      <div>
        <MenuBanner data={flatpack}></MenuBanner>
        <MenuContentFlatPackContainer data={flatpackContent}></MenuContentFlatPackContainer>
      </div>
    )
}

export default Flatpack