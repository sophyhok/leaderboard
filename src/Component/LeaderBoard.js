import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { response } from '../response';
import Table from './Table';
import Rank from './Rank';
import Age from './Age';
import Name from './Name';
import Points from './Points';

function LeaderBoard(props) {
  const [tableData, setTableData] = useState(response.list);

  const history = useHistory();

  const handleClick = (path) => {

    // remove starting '/' from slash
    if (path.charAt(0) === '/') {
      path = path.slice(1);
    }

    // sort data based on path
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
  }

  // if there is a path change, call hanlde click
  useEffect(() => {
    if (history.location.pathname !== '/') {
      handleClick(history.location.pathname);
    }
  }, [history.location.pathname])

  return (
    <div className="text-center mt-50">
      <div>
        <div>
          <Rank handleClick={handleClick} />
          <Name handleClick={handleClick} />
          <Points handleClick={handleClick} />
          <Age handleClick={handleClick} />
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
}

export default LeaderBoard;
