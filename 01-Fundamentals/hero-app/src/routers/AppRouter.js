import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
  } from "react-router-dom";

import { PublicRoutes } from './PublicRouter';
import { PrivateRoutes } from './PrivateRoutes';
  
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

	const { user } = useContext(AuthContext);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoutes 
						exact 
						path="/login" 
						component={LoginScreen} 
						isAuthenticated={ user.logged }
					/>

					<PrivateRoutes 
						path="/" 
						component={DashboardRoutes} 
						isAuthenticated={ user.logged }
					/>
				</Switch>

			</div>
		</Router>
	)
}
