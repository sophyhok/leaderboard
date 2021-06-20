import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { response } from '../response';
import Table from './Table';
import Rank from './Rank';
import Age from './Age';
import Name from './Name';
import Points from './Points';
import ButtonGroup from './ButtonGroups';

const index = 0;

function LeaderBoard(props) {
  const [tableData, setTableData] = useState(response.list);

  const history = useHistory();

  const handleClick = (path) => {
    let data;
    if (path === 'name') {
      data = response.list.sort((a, b) => {
        let sa = a.name.toLowerCase();
        let sb = b.name.toLowerCase();
        if (sa < sb) {
          return -1;
        }
        if (sa > sb) {
          return 1;
        }
        return 0;
      })
    }
    else if (path === 'points') {
      data = response.list.sort((a, b) => {
        return a.points - b.points;
      })
    }
    else if (path === 'rank') {
      data = response.list.sort((a, b) => {
        return a.rank - b.rank;
      })
    }
    else if (path === 'age') {
      data = response.list.sort((a, b) => {
        return a.age - b.age;
      })
    }
    setTableData([...data]);
    console.log("hey")
  }

  console.log(history)

  return (
    <Router>
      <div className="text-center mt-50">
        <div>
          <div>

            {/* <Route path="/rank" render={() => handleClick('rank')}> */}
            <Rank handleClick={handleClick} />
            {/* </Route> */}
            {/* <Route path="/name"> */}
            <Name handleClick={handleClick} />
            {/* </Route> */}
            {/* <Route path="/points"> */}
            <Points handleClick={handleClick} />
            {/* </Route> */}
            {/* <Route path="/rank"> */}
            <Age handleClick={handleClick} />
            {/* </Route> */}

          </div>

        </div>
        <Table data={tableData} />
      </div>
    </Router>
  );
}

export default LeaderBoard;
