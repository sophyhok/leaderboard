import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Age = ({ handleClick }) => (
  <button data-testid="route-age" className='outlined' type="button" onClick={()=>handleClick('age')}>
    <Link to="/age">Age</Link>
  </button>
);

export default Age;