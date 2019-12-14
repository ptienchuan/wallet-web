import React from 'react'
import Button from '../UI/Button/Button'

import classes from './Toolbar.module.css'

const toolbar = ( props ) => {
	return (
		<div className={classes.Toolbar}>
			<Button type='success'>Add money</Button>
		</div>
	)
}

export default toolbar