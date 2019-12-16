import React, { useState } from 'react'
import Compartment from '../../components/MoneyPage/Compartment/Compartment'

import classes from './MoneyPage.module.css'
import dummyCompartments from '../../assets/dummyCompartments'

const MoneyPage = ( props ) => {
	const [ compartments ] = useState(dummyCompartments)

	return (
		<div className={classes.MoneyPage}>
			{ compartments.map( compartment => <Compartment key={compartment._id} {...compartment} /> ) }
		</div>
	)
}

export default MoneyPage