import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentFlatPackContainer from '../../components/MenuComponents/MenuContentFlatPackContainer'
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
import MenuContact from '../../components/MenuComponents/MenuContact'

const Flatpack = () => {
    const {flatpack} = MenuBannersData
    const {flatpackContent} = MenuContentData
    return (
      <div>
        <MenuBanner data={flatpack}></MenuBanner>
        <MenuContentFlatPackContainer data={flatpackContent}></MenuContentFlatPackContainer>
       <MenuContact data={"Fordern Sie jetztIhren FlatpackContainer an!"}></MenuContact>
      </div>
    )
}

export default Flatpack