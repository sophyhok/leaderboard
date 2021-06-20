import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Rank = ({handleClick}) => (
    <button data-testid="route-rank" className='outlined' type="button" onClick={()=>handleClick('rank')}>
    <Link to="/rank">Rank</Link>
    </button>
);

export default Rank;