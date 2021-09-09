import React from 'react'
import "./Header.css";


export default function Header (){
    return (
        <nav>
        <div class="nav">
          <p class="left">Log in Page</p>
          <ul id="nav-mobile" class="right hide-on-med-and-down" >
            <li><a  class="right" href="#">Candidates</a></li>
          </ul>
        </div>
      </nav>
    )   
}
