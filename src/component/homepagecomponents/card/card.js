import React from 'react'
import '../../style/card.css'

const Card = ({cardpic,title,paragraph}) => {
  return (
    <div className="card">
      <div className="cardimage">
        <img src={cardpic} className="cardlogo"/>
      </div>
      <h1 className="title">{title}</h1>
      <p className="para">{paragraph}</p>
        
    </div>
  )
}

export default Card