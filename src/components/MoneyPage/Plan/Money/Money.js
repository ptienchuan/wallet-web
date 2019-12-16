import React from 'react'
import numeral from 'numeral'

import classes from './Money.module.css'

const money = ( props ) => {
	return (
		<div className={classes.Money}>
			<p>{props.name}</p>
			<p>{numeral(props.cost).format('0,0')}</p>
		</div>
	)
}

export default money