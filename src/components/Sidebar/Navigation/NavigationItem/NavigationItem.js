import React from 'react'
import NavigationLink from './NavigationLink/NavigationLink'

import classes from './NavigationItem.module.css'

const navigationItem = ( props ) => {
	return (
		<div className={classes.NavigationItem}>
			<p className={classes.title}>{props.title}</p>
			<div>
				{ props.list.map((item => <NavigationLink key={item._id} link='#' active={item.active}>{item.name}</NavigationLink>)) }
			</div>
		</div>
	)
}

export default navigationItem