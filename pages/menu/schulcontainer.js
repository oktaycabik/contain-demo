import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Schulcontainer = () => {
    const {schulcontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={schulcontainer}></MenuBanner>
    </div>
  )
}

export default Schulcontainer