import React from 'react'

import classes from './NavigationLink.module.css'

const navigationLink = ( props ) => {
	const usingClass = [classes.NavigationLink]
	if (props.active) {
		usingClass.push(classes.active)
	}
	return (
		<a href={props.link} className={usingClass.join(' ')}>
			{props.children}
		</a>
	)
}

export default navigationLink