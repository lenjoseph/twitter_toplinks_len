import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
