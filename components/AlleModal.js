import React from 'react'

const AlleModal = ({data}) => {
  return (
    <>
  <div className='allemodel-img vh-100'  style={{ backgroundImage: `url(${data.image})` }}>
   <div className='allemodel-content'>
   <h1> {data.title.second}</h1>
   <button className='allemodel-button'>Alle Modelle</button>
   </div>
  </div>
    </>
  )
}

export default AlleModal