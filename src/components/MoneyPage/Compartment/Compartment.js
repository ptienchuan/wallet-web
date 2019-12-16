import React from 'react'
import numeral from 'numeral'
import Plan from '../Plan/Plan'

import classes from './Compartment.module.css'

const compartment = ( props ) => {
	const propPlans = [...props.plans]
	const [ plans, spended ] = propPlans.reduce( (total, plan) => {
		if (plan.spended) {
			total[1] = total[1].concat(plan)
		}
		else {
			total[0] = total[0].concat(plan)
		}
		return total
	}, [ [], [] ])

	return (
		<div className={classes.Compartment}>
			<div className={classes.header}>
				<h3>
					{props.name}
				</h3>
				<div className="controls">

				</div>
			</div>
			<div className={classes.buget}>
				<p>
					{numeral(props.buget).format('0,0')}
				</p>
			</div>
			<Plan title="plans" list={plans} />
			<Plan title="spended" list={spended} />
		</div>
	)
}

export default compartment