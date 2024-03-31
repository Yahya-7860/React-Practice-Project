import React from "react";

export default function Navbar() {
  return (
    <div className="w-9/12 m-auto ">
      <nav className="flex justify-between items-center">
        <div id="image">
          <img src="/public/images/Frame 2 1.png" alt="" />
        </div>
        <div id="links">
          <ul className="flex gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
