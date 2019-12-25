import React from "react";
import classes from "./RadioInput.module.css";

const RadioInput = props => {
	const title = props.title;
	const id = `${props.name}_${props.value}`;

	const receiveProps = { ...props };
	if (receiveProps.type) delete receiveProps.type;
	if (receiveProps.title) delete receiveProps.title;
	if (receiveProps.id) delete receiveProps.id;

	return (
		<div className={classes.RadioInput}>
			<input type="radio" id={id} {...receiveProps} />
			<label htmlFor={id}>{title}</label>
		</div>
	);
};

export default RadioInput;
