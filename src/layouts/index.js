import React from "react";
import Link from "gatsby-link";
import Header from "../components/header.js";

const MenuLink = props =>
  <li className="mainmenuitem">
    <a href={props.to}>{props.children}</a>
  </li>

export default ({ children }) =>
<div className="l-wrap">
  <Header>
    <MenuLink to="/">BLOG</MenuLink>
    <MenuLink to="/games/">STUFF</MenuLink>
    <MenuLink to="/about/">ABOUT</MenuLink>
  </Header>
  {children()}
</div>
