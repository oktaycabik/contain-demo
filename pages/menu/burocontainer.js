import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Burocontainer = () => {
  const {burocontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={burocontainer}></MenuBanner>
    </div>
  )
}

export default Burocontainer