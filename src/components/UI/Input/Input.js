import React from "react";
import classes from "./Input.module.css";

const Input = props => {
	let inputElement = null;
	switch (props.element) {
		case "text":
			inputElement = <input className={classes.TextInput} {...props} />;
			break;
		case "textarea":
			inputElement = (
				<textarea className={classes.TextInput} {...props} />
			);
			break;
		case "radio":
			const { itemList = [] } = props;
			inputElement = itemList.map((item, index) => {
				const id = `${item.name}_${item.value}`;
				return (
					<div className={classes.Radio} key={index}>
						<input type="radio" {...item} id={id} />
						<label htmlFor={id}>{item.title}</label>
					</div>
				);
			});
			break;
		default:
			inputElement = <input className={classes.TextInput} {...props} />;
			break;
	}

	let label = null;
	if (props.label) {
		if (props.id) {
			label = (
				<label htmlFor={props.id} className={classes.Label}>
					{props.label}
				</label>
			);
		} else {
			label = <label className={classes.Label}>{props.label}</label>;
		}
	}
	return (
		<div className={classes.Input}>
			{label}
			{inputElement}
		</div>
	);
};

export default Input;
