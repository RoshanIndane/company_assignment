import React from "react";
import "../styles/navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";



const Navbar = ({setShow}) => {
  return (
    <div className="nav">
      <h1 onClick={()=>setShow(true)}>My Shopieee</h1>

      <h1 onClick={()=>setShow(false)} ><Badge badgeContent={4} color="primary">
          <ShoppingCartIcon />
      </Badge></h1>
    </div>
  );
};

export default Navbar;
