import React from "react";

import classes from "./InputLabel.module.css";

const inputLabel = props => (
	<label className={classes.InputLabel} htmlFor={props.forHtml}>
		{props.children}
	</label>
);

export default inputLabel;
