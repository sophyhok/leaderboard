import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
      <table className="mt-50" data-testid="app-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th className="numeric">Points</th>
            <th className="numeric">Age</th>
          </tr>
        </thead>
        <tbody data-testid="app-tbody">
          {data.map((item, index) => {
            return (
              <tr key={item.rank}>
                <td data-testid={`rank-${index}`}>{item.rank}</td>
                <td data-testid={`name-${index}`}>{item.name}</td>
                <td data-testid={`points-${index}`} className="numeric">{item.points}</td>
                <td data-testid={`age-${index}`} className="numeric">{item.age}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;