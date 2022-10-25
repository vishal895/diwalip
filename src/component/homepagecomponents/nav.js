import React, { useState } from 'react'
import "../style/nav.css"
import adminlogo from '../image/admin.png'
import logoImage from '../image/logo.png'
import shoplogo from '../image/shop.png'


  const Nav = () => {
   const [showNav,setshowNav] = useState(false)
   const handleToggleNavbar = () =>{
     setshowNav(!showNav)
   }
    
  return (
    <>
     
    <div className="navbar">
    <div className="desktoplogo">
      <img src={logoImage} className="logo"  alt="logo"/>
    </div>
    <div className="option">
      <ul className="desktopview">
        <li className="nav_d">Open packs</li>
        <li className="nav_d">Shop</li>
        <li className="nav_d">MarketPlace</li>
        <li className="nav_d">All Collectibles</li>
        <li className="nav_d">All Collection</li>
        <li className="nav_d"><img src={adminlogo} className="Alogo" alt="adminlogo"/></li>
        <li className="nav_d"><img src={shoplogo} className="Alogo" alt="shoplogo"/></li>
      </ul>
    </div>
    <div className="toggleBtn" onClick={()=> handleToggleNavbar()}>
      <button className="btnm">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      </button>
    </div>
    </div>
    <div className={`togglecontent ${showNav ? "" : "d-none"}`}>
    <ul className="desktopView">
        <li className="nav_d">Open packs</li>
        <li className="nav_d">Shop</li>
        <li className="nav_d">MarketPlace</li>
        <li className="nav_d">All Collectibles</li>
        <li className="nav_d">All Collection</li>
      </ul>
    </div>
    
    
    </>
  )
}
export default Nav 