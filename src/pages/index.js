import "../css/index.css";
import React from "react";
import Link from "gatsby-link";

export default () => (
<div>
	<h1>Hello Gatsby!</h1>
	<p>What a world.</p>
	<img src="http://lorempixel.com/400/200/" alt="" />
	<br />
	<div>
		<Link to="/page-2/">Link</Link>
	</div>
	<div>
		<Link to="/counter/">Counter</Link>
	</div>
</div>
);