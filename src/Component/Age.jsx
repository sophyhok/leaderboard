import React from 'react';
import { Link } from "react-router-dom";

const Age = ({ handleClick }) => (
  <Link to="/age">
    <button data-testid="route-age" className='outlined' type="button" onClick={() => handleClick('age')}>
      Age
    </button>
  </Link>
);

export default Age;