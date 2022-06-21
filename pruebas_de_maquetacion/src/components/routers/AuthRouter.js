import React from 'react';
import {
	Routes,
	Route
  } from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Routes>
					<Route 
						exact
						path="login" 
						element={ <LoginScreen /> }
					/>

					<Route 
						exact
						path="sigin" 
						element={ <RegisterScreen /> }
					/>

					<Route path="*" element={ <RegisterScreen /> } />
				</Routes>
			</div>
		</div>
	)
}
