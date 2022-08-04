import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentXlWohnContainer from '../../components/MenuComponents/MenuContentXlWohnContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Xlwonhcontainer = () => {
  const {xlWohnContainer} = MenuBannersData
  const {xlwohnContainerContent} = MenuContentData
  return (
    <div>
          <Head>
        <title>Contain Haus | XLWohncontainer </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuBanner data={xlWohnContainer}></MenuBanner>
      <MenuContentXlWohnContainer data={xlwohnContainerContent}></MenuContentXlWohnContainer>
    <MenuContact data={"Fordern Sie jetzt Ihren XL-Wohncontainer an!"}></MenuContact>
    </div>
  )
}

export default Xlwonhcontainer