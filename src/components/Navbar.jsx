import { Link } from "react-router-dom";

import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
