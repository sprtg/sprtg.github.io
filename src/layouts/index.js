import React from "react";
import Link from "gatsby-link";

const MenuLink = props =>
  <li>
    <a style={{ width: `calc(16.666% - 20px)`,
                float: `left`,
                marginRight: `10px`,
                marginLeft: `10px`,
                textAlign: `center`,
                textDecoration: `none`,
                color: `black`
                }} href={props.to}>{props.children}</a>
  </li>

export default ({ children }) =>
<div style={{ maxWidth: `64em`, marginTop: `0px`, marginRight: `auto`, marginLeft: `auto` }}>
  <div style={{ width: `calc(100% - 20px)`, 
                height: `40px`,
                marginRight: `10px`,
                marginLeft: `10px`,
                float: `left` }}>
    <img style={{ width: `calc(25% - 10px`,
                  height: `40px`,
                  float: `left` }} src="http://lorempixel.com/200/40/" alt=""/>
    <ul style={{ width: `calc(75% - 10px)`,
                float: `left`,
                listStyleType: `none`,
                marginLeft: `10px`,
                padding: 0}}>
      <MenuLink to="/">BLOG</MenuLink>
      <MenuLink to="/games/">STUFF</MenuLink>
      <MenuLink to="/about/">ABOUT</MenuLink>
    </ul>
  </div>
  {children()}
</div>