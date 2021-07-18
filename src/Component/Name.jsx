import React from 'react';
import { Link } from "react-router-dom";

const Name = ({ handleClick }) => (
  <Link to="/name">
    <button data-testid="route-name" className='outlined' type="button" onClick={() => handleClick('name')}>
      Name
    </button>
  </Link>
);

export default Name;