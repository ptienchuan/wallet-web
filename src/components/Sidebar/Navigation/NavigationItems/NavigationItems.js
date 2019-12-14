import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

import classes from './NavigationItems.module.css'

const navigationItems = ( props ) => {
	return (
		<div className={classes.NavigationItems}>
			<p className={classes.title}>{props.title}</p>
			<div>
				{ props.list.map((item => <NavigationItem key={item._id} link='#' active={item.active}>{item.name}</NavigationItem>)) }
			</div>
		</div>
	)
}

export default navigationItems