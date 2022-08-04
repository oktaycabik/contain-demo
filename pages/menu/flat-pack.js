import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentFlatPackContainer from '../../components/MenuComponents/MenuContentFlatPackContainer'
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
const Flatpack = () => {
    const {flatpack} = MenuBannersData
    const {flatpackContent} = MenuContentData
    return (
      <div>
        <Head>
        <title>Contain Haus | Flatpack </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <MenuBanner data={flatpack}></MenuBanner>
        <MenuContentFlatPackContainer data={flatpackContent}></MenuContentFlatPackContainer>
       <MenuContact data={"Fordern Sie jetztIhren FlatpackContainer an!"}></MenuContact>
      </div>
    )
}

export default Flatpack