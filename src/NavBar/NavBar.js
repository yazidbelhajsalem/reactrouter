

import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({Login,auth}) {
  const navItems = ["Dashboard", "MovieList", "AddMovie", "SearchForMovie"];

  const navigate = useNavigate();

  const handleClick = (path) => {
    
    navigate("/" + path);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin:'50px' }}>
      <div>
        {navItems.map((item) => (
          <button onClick={() => handleClick(item)}>{item}</button>
        ))}
      </div>
      
    </div>
  );
}

export default NavBar;