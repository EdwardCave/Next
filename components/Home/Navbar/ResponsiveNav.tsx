'use client';
import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
const ResponsiveNav = () => {
  const [showNav,setShowNav] = React.useState(false)
  const handNavShow = ()=>{
    setShowNav(!showNav)
  }
  const handleCloseNav= ()=>setShowNav(false)
  return (
    <div>
      <Nav openNav={handNavShow}/>
      <MobileNav showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  );
};

export default ResponsiveNav;
