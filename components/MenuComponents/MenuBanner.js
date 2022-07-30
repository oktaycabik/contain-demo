import React from 'react'

const MenuBanner = ({data}) => {
  return (
    <div>
        <div
        className="menu-banner-img vh-100"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        

     
        <div className="menu-banner-content col-lg-4 col-md-4 col-sm-6 col-12">
          <h5>{data.title.first}</h5>
          <h5>{data.title.second}</h5>
          <p>{data.content.first}</p>
          <p>{data.content.second}</p>
          <p>{data.content.third}</p>
          <button className="banner-button">JETZT ZUM SHOP</button>
        </div>
     
      </div>
    </div>
  )
}

export default MenuBanner