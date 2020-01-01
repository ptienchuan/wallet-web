import React from "react";

import classes from "./Button.module.css";

const Button = props => {
	return (
		<button
			className={[classes.Button, classes[props.color]].join(" ")}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
