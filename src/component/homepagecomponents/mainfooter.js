import React from 'react'
import '../style/mainfooter.css'
import logo from "../image/logo.png"
import telegram from "../image/telegram.png"
import twitter from "../image/twitter.png"
import facebook from "../image/facebook.png"
import instagram from "../image/instagram.png"

const Mainfooter = () => {
  return (
      <>
    <div className="footer">
                <div className="iteams">
                    <div className="iteams1">
                        <ul className="ul">
                            <li>
                                <div className="f_logo">
                                <img src={logo} className="f_lo"/>
                                </div>
                            </li>
                            <li className="l1">Follow us on social media</li>
                            <li className="icon">
                                <img src={telegram}/>
                                <img src={twitter}/>
                                <img src={facebook}/>
                                <img src={instagram}/>
                            </li>
                        </ul>
                    </div>
                    <div className="iteams2">
                        <div className="itk">
                            <div className="iteams01">
                        <ul className="ul">
                            <li className="l">MarketPlace</li>
                            <li className="ls">Shop</li>
                            <li className="ls">Open Packs</li>
                            <li className="ls">Marketplace</li>
                            <li className="ls">All Collectibles</li>
                            <li className="ls">My Collections</li>
                        </ul>
                        </div>
                    <div className="iteams02">
                        <ul className="ul">
                            <li className="l">My Account</li>
                            <li className="ls">Profile </li>
                            <li className="ls">Vault</li>
                            <li className="ls">Favorites</li>
                            <li className="ls">Listings</li>
                            <li className="ls">Account Setting</li>
                        </ul>
                    </div>
                    <div className="iteams03">
                        <ul className="ul">
                            <li className="l">Company</li>
                            <li className="ls">About</li>
                            <li className="ls">Help Center</li>
                            <li className="ls">Career</li>
                            <li className="ls">Blog</li>                    
                        </ul>
                    </div>
                    
                </div>
                </div>
                
            </div>
            </div> 
           
            
                
            <hr/>
                <div className="iteams6">
                     
                        <h3 className="lk">© 2021 OW3NS</h3>
                        <div className="iteams7">
                            <h2 className="lk">Privacy Policy</h2>
                            <h2 className="lk">Terms of Services</h2>
                        </div>
                </div>
               
            
    </>
            
  )
}

export default Mainfooter