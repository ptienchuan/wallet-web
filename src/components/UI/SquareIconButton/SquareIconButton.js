import React from "react";
import { IoMdClose, IoIosMore } from "react-icons/io";

import classes from "./SquareIconButton.module.css";

const SquareIconButton = props => {
	let Main = null;
	switch (props.icon) {
		case "close":
			Main = IoMdClose;
			break;
		case "more":
			Main = IoIosMore;
			break;
		default:
			Main = IoMdClose;
			break;
	}

	return (
		<Main
			className={[classes.SquareIconButton, classes[props.type]].join(
				" "
			)}
			style={props.style}
			title={props.tooltip}
			onClick={props.onClick}
		/>
	);
};

export default SquareIconButton;
