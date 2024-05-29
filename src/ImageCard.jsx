import React from 'react'
import './style/styles.css'

const ImageCard = ({img, title, desc,}) => {
  return (
    <div className="container">
            <div className="card">
                <div className="images">
                    <img src={img} alt=""/>
                    <h1>{title}</h1>
                </div>
                
                <div className="content">
                   <p>{desc}</p>
                </div>
            </div>

        </div>
  )
}

export default ImageCard