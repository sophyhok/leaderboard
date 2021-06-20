import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Points = ({handleClick}) => (
    <button data-testid="route-points" className='outlined' type="button" onClick={()=>handleClick('points')}>
        <Link to="/points">Points</Link>
    </button>
);

export default Points;