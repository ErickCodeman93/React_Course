import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Component404 } from './Component404';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />

				<Switch>
					<Route exact path="/" component={ HomeScreen } />
					<Route exact path="/about" component={ AboutScreen } />
					<Route exact path="/login" component={ LoginScreen } />
					<Route component={ Component404 } />
				</Switch>
			</div>
		</Router>
	)
}
