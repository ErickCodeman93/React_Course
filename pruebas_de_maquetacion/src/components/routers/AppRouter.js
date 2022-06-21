import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import { PsyScreen } from '../psyapp/PsyScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
     			 <Routes>
					<Route 
						path="/" 
						element={ <PsyScreen /> }
					/>
					<Route 
						path="/auth/*" 
						element={ <AuthRouter /> }
					/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}
