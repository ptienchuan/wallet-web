import React from "react";
import Backdrop from "../../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const modal = props => {
	return (
		<>
			<Backdrop />
			<div className={classes.Modal}>
				<div className={classes.inner}>{props.children}</div>
			</div>
		</>
	);
};

export default modal;
