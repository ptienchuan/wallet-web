import React from "react";

import classes from "./InputContainer.module.css";

const inputContainer = props => {
	let usingClasses = [classes.InputContainer];
	if (props.center) {
		usingClasses.push(classes.center);
	}

	return <div className={usingClasses.join(" ")}>{props.children}</div>;
};

export default inputContainer;
