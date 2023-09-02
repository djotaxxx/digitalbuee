import React from 'react'

const Card = ({title,img,description,id}) => {

  return (
    <div key={id}>
        <h1>{title}</h1>
        <img src={img} alt="game" />
        <h4>{description}</h4>
    </div>
  )
}

export default Card