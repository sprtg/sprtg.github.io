import React from "react";
import Link from "gatsby-link";

const MenuLink = props =>
  <li className="mainmenuitem">
    <a href={props.to}>{props.children}</a>
  </li>

export default ({ children }) =>
<div className="l-wrap">
  <div className="header"> 
    <img className="logo" src="http://lorempixel.com/200/40/" alt=""/>
    <ul className="mainmenu">
      <MenuLink to="/">BLOG</MenuLink>
      <MenuLink to="/games/">STUFF</MenuLink>
      <MenuLink to="/about/">ABOUT</MenuLink>
    </ul>
  </div>
  {children()}
</div>
