import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentPfortnerContainer from '../../components/MenuComponents/MenuContentPfortnerContainer'
import MenuBannersData from "../../data/menu/menuBanner.json"
const Pfortnercontainer = () => {
  const {pfortnercontainer} = MenuBannersData
  return (
    <div>
      <MenuBanner data={pfortnercontainer}></MenuBanner>
      <MenuContentPfortnerContainer></MenuContentPfortnerContainer>
    </div>
  )
}

export default Pfortnercontainer