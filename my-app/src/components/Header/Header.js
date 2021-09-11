import React from 'react'
import "./Header.css";


export default function Header({ title, showItems }) {
  return (
    <nav>
      <div class="nav">
        <p class="left">{title}</p>
        {showItems
          ? <ul id="nav-mobile" class="right hide-on-med-and-down" >
            <li><button class="right" >Candidates</button></li>
          </ul>
          : <></>
        }
      </div>
    </nav>
  )
}
