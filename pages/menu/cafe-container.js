import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Cafecontainer = () => {
  const {cafecontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={cafecontainer}></MenuBanner>
    </div>
  )
}

export default Cafecontainer