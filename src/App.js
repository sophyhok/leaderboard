import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import Name from './Component/Name';
import Rank from './Component/Rank';
import Age from './Component/Age';
import Points from './Component/Points';
import 'h8k-components';

const title = "SPA - LeaderBoard";

function App() {
	return (
		<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			<LeaderBoard />
		</div>
		// <Router>
		// 	<Switch>
		// 		<Route path="/">
		// 			<div className="App">
		// 				<h8k-navbar header={title}></h8k-navbar>
		// 				<LeaderBoard />
		// 			</div>
		// 		</Route>
		// 		<Route path="/name">
		// 			<Name />
		// 		</Route>
		// 		<Route path="/rank">
		// 			<Rank />
		// 		</Route>
		// 		<Route path="/points">
		// 			<Points />
		// 		</Route>
		// 		<Route path="/age">
		// 			<Age />
		// 		</Route>
		// 	</Switch>
		// </Router>

	);
}

export default App;
