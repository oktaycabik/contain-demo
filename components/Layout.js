import React from 'react'
import ContanctLayer from './ContanctLayer'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <> 
    <Header></Header>
    <ContanctLayer></ContanctLayer>
    <main className='w-100'>
  {children}
    </main>
    <Footer></Footer>
    </>
  )
}

export default Layout