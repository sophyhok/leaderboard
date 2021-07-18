import React from 'react';
import { Link } from "react-router-dom";

const Rank = ({ handleClick }) => (
    <Link to="/rank"><button data-testid="route-rank" className='outlined' type="button" onClick={() => handleClick('rank')}>
        Rank
    </button>
    </Link>
);

export default Rank;