import React from "react";

export default function Navbar() {
  return (
    <div className="container">
      <div className="image">
        <img src="public/images/brand_logo.png" alt="" />
      </div>
      <div className="list">
        <ul className="list1">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className="loginbtn">Login</button>
      </div>
    </div>
  );
}
