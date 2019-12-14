import React from 'react'
import User from './User/User'
import Navigation from './Navigation/Navigation'

import classes from './Sidebar.module.css'

const sidebar = ( props ) => {
	return (
		<div className={classes.Sidebar}>
			<div>LOGO</div>
			<User user={props.user} />
			<Navigation compartments={props.compartments}/>
		</div>
	)
}

export default sidebar