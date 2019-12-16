import React from 'react'
import PlanItems from './PlanItems/PlanItems'

import classes from './Plan.module.css'

const plan = ( props ) => {
	return (
		<div className={classes.Plan}>
			<p className={classes.title}>{props.title}</p>
			<div className={classes.money}>
				<PlanItems list={props.list}/>
			</div>
		</div>
	)
}

export default plan