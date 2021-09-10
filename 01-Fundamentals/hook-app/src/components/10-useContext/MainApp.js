import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

	// const user = {
	// 	id:1233,
	// 	name: 'Erick',
	// 	mail: 'erick.alva@gmail.com'
	// }

	const [user, setUser] = useState({});



	return (
		<UserContext.Provider value={ {
			user,
			setUser
		} }>
			<AppRouter />
		</UserContext.Provider>
	)
}
