import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Wohncontainer = () => {
  const {wohncontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={wohncontainer}></MenuBanner>
    </div>
  )
}

export default Wohncontainer