import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'

import classes from './Navigation.module.css'

const navigation = ( props ) => {
	const settingList = [{
		_id: '1',
		name: 'Action'
	}]

	return (
		<nav className={classes.Navigation}>
			<NavigationItems title="compartments" list={props.compartments} />
			<NavigationItems title="settings" list={settingList} />
		</nav>
	)
}

export default navigation