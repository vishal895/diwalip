import React from 'react'
import Slider from "react-slick";
import image1 from "../../image/sportmen1.png";
import image2 from "../../image/sportmen2.png";
import image3 from "../../image/sportmen3.png";
import image4 from "../../image/sportmen4.png";
import image5 from "../../image/sportmen5.png";

const Lider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    
    
  };
  return (
    <div>
        
        <Slider {...settings}>
        <div>
          <img src={image2}/> 
       </div>
       <div>
       <img src={image1}/>  
       </div>
       <div>
       <img src={image5}/> 
       </div>
       <div>
       <img src={image3}/> 
       </div>
       <div>
       <img src={image4}/> 
       </div>
        </Slider>
      </div>
  )
}

export default Lider

