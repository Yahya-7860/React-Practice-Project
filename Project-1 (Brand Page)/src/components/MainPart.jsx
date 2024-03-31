import React from "react";

export default function MainPart() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div className="bigFont">
          <h1>YOUR FEET DESERVES THE BEST.</h1>
        </div>
        <div className="smallFont">
          <p>
            YOUR FEET DESERVE THE BEST AND WEU+0060RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WEU+0060RE HERE TO HELP YOU
            WITH OUR SHOES.
          </p>
        </div>
        <div className="main_btn">
          <div>
            <button className="loginbtn">Shop now</button>
          </div>
          <div className="catagory">
            <button className="logbtn">Catagory</button>
          </div>
        </div>
        <p>Also Available On</p>
        <div className="bottoImg">
          <img src="public\images\flipkart.png" alt="" />
          <img src="public\images\amazon.png" alt="" />
        </div>
      </div>
      <div className="right">
        <img src="public/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}
