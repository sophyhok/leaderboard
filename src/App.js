import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';

const title = "SPA - LeaderBoard";

function App() {
  return (
    <Router>
      <Route path="/">
        <div className="App">
          <LeaderBoard />
        </div>
      </Route>
    </Router>
  );
}

export default App;

