import "../css/index.css";
import React from "react";
import Link from "gatsby-link";

export default() => (
<div className="post clearfix">
  <div className="posttitle">POST HEADER</div>
  <div className="postdate clearfix">2017-12-01</div>
  <div className="postimg"><img src="http://lorempixel.com/400/200/" alt="" /></div>
  <p className="posttext">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer viverra odio nec pretium lobortis, ex augue scelerisque mauris, et pharetra sapien est vel velit. Nulla eget erat rutrum, tristique est non, luctus felis. Suspendisse vel consequat neque, sit amet convallis neque. Etiam ut mi mi. Praesent id augue consquat, ultrices ipsum in, consectetur ipsum. Vestibulum id felis bibendum, congue tellus vitae, efficitur metus. Integer sit amet lorem eleifend, venenatis nulla ut, laculis nisi. Praesent in ultricies lacus.
  </p>
  <p className="posttag clearfix">TAG1 TAG2</p>
</div>
)
