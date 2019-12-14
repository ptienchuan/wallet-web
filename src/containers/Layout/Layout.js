import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Toolbar from '../../components/Toolbar/Toolbar'

import classes from './Layout.module.css'
import avatar from '../../assets/img/avatar.jpg'
import dummyCompartments from '../../assets/dummyCompartments'
dummyCompartments[0].active = true;

const Layout = ( props ) => {
	const [ user ] = useState({
		email: 'ptienchuan@gmail.com',
		name: 'Chuan Pham',
		avatar: avatar,
	})

	const [ compartments ] = useState(dummyCompartments)

	return (
		<div className={classes.Layout}>
			<div className={classes.side}>
				<Sidebar user={user} compartments={compartments}/>
			</div>
			<div className={classes.main}>
				<Toolbar />
				<main>
					{props.children}
				</main>
			</div>
		</div>
	)
}

export default Layout