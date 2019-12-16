import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Toolbar from '../../components/Toolbar/Toolbar'

import classes from './Layout.module.css'
import avatar from '../../assets/img/avatar.jpg'
import dummyWallets from '../../assets/dummyWallets'
dummyWallets[0].active = true;

const Layout = ( props ) => {
	const [ user ] = useState({
		email: 'ptienchuan@gmail.com',
		name: 'Chuan Pham',
		avatar: avatar,
	})

	const [ wallets ] = useState(dummyWallets)

	return (
		<div className={classes.Layout}>
			<div className={classes.side}>
				<Sidebar user={user} wallets={wallets}/>
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