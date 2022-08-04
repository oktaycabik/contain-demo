import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContact from '../../components/MenuComponents/MenuContact'
import MenuContentPfortnerContainer from '../../components/MenuComponents/MenuContentPfortnerContainer'
import Head from "next/head"

import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"

const Pfortnercontainer = () => {
  const {pfortnercontainer} = MenuBannersData
  const {pfortcontainerContent} = MenuContentData
  return (
    <div>
         <Head>
        <title>Contain Haus | Pfortcontainer </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuBanner data={pfortnercontainer}></MenuBanner>
      <MenuContentPfortnerContainer data={pfortcontainerContent}></MenuContentPfortnerContainer>
     <MenuContact data={"Fordern Sie jetz tIhren Pfortnercontainer an!"}></MenuContact>
    </div>
  )
}

export default Pfortnercontainer