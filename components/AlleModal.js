import React from 'react'
import Link from "next/link"
const AlleModal = ({data}) => {
  return (
    <>
  <div className='allemodel-img vh-100'  style={{ backgroundImage: `url(${data.image})` }}>
   <div className='allemodel-content'>
   <h1> {data.title.second}</h1>
   <Link href={`${data.href}`}> 
   <button className='allemodel-button'>Alle Modelle</button>
   </Link>
   </div>
  </div>
    </>
  )
}

export default AlleModal