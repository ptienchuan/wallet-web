import React from "react";

import classes from "./Button.module.css";

const Button = props => {
	return (
		<button
			className={[classes.Button, classes[props.typeStyle]].join(" ")}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
