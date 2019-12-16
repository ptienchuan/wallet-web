import React from 'react'
import Money from '../Money/Money'

const planItems = ( props ) => {
	return (
		<>
			{props.list.map(item => <Money key={item._id} {...item} />)}
		</>
	)
}

export default planItems