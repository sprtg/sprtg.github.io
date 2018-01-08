import React from "react";

export default ({children}) =>
  <div className="header clearfix">
    <img className="logo" src="http://lorempixel.com/200/40/" alt=""/>
    <ul className="mainmenu">
      {children}
    </ul>
  </div>
