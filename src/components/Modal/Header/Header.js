import React from "react";
import SquareIconButton from "../../../components/UI/SquareIconButton/SquareIconButton";

import classes from "./Header.module.css";

const header = props => {
	const { title = "Modal", onClickButton = () => {} } = props;
	return (
		<div className={classes.Header}>
			<h3>{title}</h3>
			<SquareIconButton
				icon="close"
				type="dark"
				onClick={onClickButton}
			/>
		</div>
	);
};

export default header;
