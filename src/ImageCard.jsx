import React from 'react'


const ImageCard = () => {
  return (
    <div className="container">
            <div className="card">
                <div className="images">
                    <img src="pic1.png" alt=""/>
                    <h1>Nike Shoes</h1>
                </div>
                
                <div className="content">
                    <div className="size">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>

                    <div className="color">
                        <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>

        </div>
  )
}

export default ImageCard