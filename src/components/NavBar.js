import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const allLinks = links.map(link => <a href={`#${link}`} key = {link}>{link}</a>)

  return <nav>{allLinks}</nav>;
}

export default NavBar;
