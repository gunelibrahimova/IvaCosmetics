import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
      <Link to='/' style={{textDecoration:"none"}}>
        <p className="menu-item">
          Home
        </p>
      </Link>
      <Link to='/about' style={{textDecoration:"none"}}>
      <p className="menu-item">
        About 
      </p>
      </Link>
      <Link to='/shop' style={{textDecoration:"none"}}>
        <p className="menu-item">
          Shop
        </p>
      </Link>
      <Link to='/faq' style={{textDecoration:"none"}}>
        <p className="menu-item">
          FAQ
        </p>
      </Link>
      <Link to='/news' style={{textDecoration:"none"}}>
        <p className="menu-item">
           News
        </p>
      </Link>
      <Link to='/contact' style={{textDecoration:"none"}}>
        <p className="menu-item">
          Contact 
        </p>
      </Link>
    </Menu>
  );
};