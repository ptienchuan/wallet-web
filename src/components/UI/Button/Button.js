import React from "react";

import classes from "./Button.module.css";

const button = props => {
	return (
		<button
			className={[classes.Button, classes[props.typeStyle]].join(" ")}
			onClick={props.clicked}
		>
			{props.children}
		</button>
	);
};

export default button;
