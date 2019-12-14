import React from 'react'

import classes from './NavigationItem.module.css'

const navigationItem = ( props ) => {
	const usingClass = [classes.NavigationItem]
	if (props.active) {
		usingClass.push(classes.active)
	}
	return (
		<a href={props.link} className={usingClass.join(' ')}>
			{props.children}
		</a>
	)
}

export default navigationItem