import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Xlwonhcontainer = () => {
  const {xlWohnContainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={xlWohnContainer}></MenuBanner>
    </div>
  )
}

export default Xlwonhcontainer