import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';
export default () => (

  <nav>
    <ul>
      <li>
        <NavLink activeClassName="selected" exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" exact to="/dashboard">Dashboard</NavLink>
      </li>
    </ul>
  </nav>

);
