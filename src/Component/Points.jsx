import React from 'react';
import { Link } from "react-router-dom";

const Points = ({ handleClick }) => (
  <Link to="/points">
    <button data-testid="route-points" className='outlined' type="button" onClick={() => handleClick('points')}>
      Points
    </button>
  </Link>
);

export default Points;