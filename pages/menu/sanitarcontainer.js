import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuSanitarContainer from '../../components/MenuComponents/MenuSanitarContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Sanitarcontainer = () => {
  const {sanitarcontainer} = MenuBannersData
  const {sanitacontainerContent} = MenuContentData
  return (
    <div>
         <Head>
        <title>Contain Haus | Sanitär Container
 </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuBanner data={sanitarcontainer}></MenuBanner>
      <MenuSanitarContainer data={sanitacontainerContent}></MenuSanitarContainer>
     <MenuContact data={"Fordern Sie jetzt Ihren Sanitärcontainer an!"}></MenuContact>
    </div>
  )
}

export default Sanitarcontainer