import React, { useState } from 'react'
import numeral from 'numeral'
import CircleIconButton from '../../../UI/CircleIconButton/CircleIconButton'

import classes from './Money.module.css'

const Money = ( props ) => {
	const [ displayButtons, setDisplayButtons ] =useState(false)

	let  note = null
	if (props.note) {
		note = <p className={classes.note}>Note: {props.note}</p>
	}

	let buttons = null
	if (displayButtons) {
		buttons = (
			<div className={classes.buttons}>
				<CircleIconButton
					icon={props.spended ? 'reverse' : 'success'}
					type={props.spended ? 'warning' : 'success'}
					tooltip={props.spended ? 'Đánh dấu chưa tiêu' : 'Đánh dấu đã tiêu'}  />
				<CircleIconButton icon='close' type='danger' tooltip='Xóa' />
			</div>
		)
	}

	const buttonHandler = (val) => {
		setDisplayButtons(val)
	}

	return (
		<div className={classes.Money} onMouseEnter={() => buttonHandler(true)} onMouseLeave={() => buttonHandler(false)}>
			<div className={classes.header}>
				<div className={classes.info}>
					<p>{props.name}</p>
					<p className={[classes.cost, classes[props.type]].join(' ')}>{numeral(props.cost).format('0,0')}</p>
				</div>
				{ buttons }
			</div>
			{ note }
		</div>
	)
}

export default Money