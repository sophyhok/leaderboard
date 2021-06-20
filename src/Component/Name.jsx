import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Name = ({handleClick}) => (
    <button data-testid="route-name" className='outlined' type="button" onClick={()=>handleClick('name')}>
        <Link>Name</Link>
    </button>
);

export default Name;