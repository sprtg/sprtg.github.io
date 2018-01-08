import React from "react";
import Link from "gatsby-link";
import Header from "../components/header.js";
import MainContent from "../components/maincontent.js";
import RightSideBar from "../components/rightsidebar.js";
import Footer from "../components/footer.js";
import ItemBar from "../components/itembar.js";

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
  <MainContent>
    <ItemBar/>
    {children()}
  </MainContent>
  <RightSideBar/>
  <Footer />
</div>
