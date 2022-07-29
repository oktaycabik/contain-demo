import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Flatpack = () => {
    const {flatpack} = MenuBannersData
    return (
      <div>
        <MenuBanner data={flatpack}></MenuBanner>
      </div>
    )
}

export default Flatpack