import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Specialcontainer = () => {
  const {special} = MenuBannersData
  return (
    <div>
      <MenuBanner data={special}></MenuBanner>
    </div>
  )
}

export default Specialcontainer