import React from "react";
import {
	IoMdCheckmark,
	IoMdClose,
	IoIosCard,
	IoMdRemove,
	IoMdAdd,
	IoMdCreate
} from "react-icons/io";

import classes from "./CircleIconButton.module.css";

const CircleIconButton = props => {
	let Main = null;
	switch (props.icon) {
		case "check":
			Main = IoMdCheckmark;
			break;
		case "close":
			Main = IoMdClose;
			break;
		case "reverse":
			Main = IoMdRemove;
			break;
		case "card":
			Main = IoIosCard;
			break;
		case "add":
			Main = IoMdAdd;
			break;
		case "edit":
			Main = IoMdCreate;
			break;
		default:
			Main = IoMdCheckmark;
			break;
	}

	return (
		<Main
			className={[classes.CircleIconButton, classes[props.type]].join(
				" "
			)}
			style={props.style}
			title={props.tooltip}
			onClick={props.onClick}
		/>
	);
};

export default CircleIconButton;
