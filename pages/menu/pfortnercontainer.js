import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Pfortnercontainer = () => {
  const {pfortnercontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={pfortnercontainer}></MenuBanner>
    </div>
  )
}

export default Pfortnercontainer