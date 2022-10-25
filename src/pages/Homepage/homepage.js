import React from 'react'
import "../../component/style/home.css"
import Card from '../../component/homepagecomponents/card/card'
import Mainfooter from '../../component/homepagecomponents/mainfooter'
import Nav from '../../component/homepagecomponents/nav'
import Secondlastfooter from '../../component/homepagecomponents/secondlastfooter'
import buypack from "../../component/image/buypack.png"
import challenges from "../../component/image/challenges.png"
import promo from "../../component/image/promo.png"
import logocard from "../../component/image/logocard.png"
import Slidercard from '../../component/homepagecomponents/slider/slider'
import Lider from '../../component/homepagecomponents/slider/slider'




const Homepage = () => {

  
  return (
    <>
      <section>
    <Nav/>
    </section> 
       <section>
      <div className="hero">
        <div className="plc">
      <img src={logocard} className="lc"/>
      </div>
      <h1 className="text">Supergoal Series NFT Collection</h1>
      </div>
    </section>    
       <section>
    <div className="card_portion">
    <Card cardpic={buypack} title="Buy Packs" paragraph="Complete your collection of Officially licensed digital collectibles."/>
    <Card cardpic={challenges} title="Challenges" paragraph="Participate in challenges to earn unique rewards. "/>
    <Card cardpic={promo} title="Redeem Promo" paragraph="Click here to receive your free SuperGoal Promo Pack"/>
    </div>
    </section>   
     <section>
      <div className="slider">
        <h1 className="heading">Build the Player Roster of Your Dreams</h1>
        <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <Lider/> 
        
      </div>
    </section>  
      <section>
    <Secondlastfooter/>
    </section>  
    <section>
    <Mainfooter/>
    </section>
    </>
  )
}

export default Homepage