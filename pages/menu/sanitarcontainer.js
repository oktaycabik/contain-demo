import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Sanitarcontainer = () => {
  const {sanitarcontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={sanitarcontainer}></MenuBanner>
    </div>
  )
}

export default Sanitarcontainer