import React from "react";

import CircleIconButton from "../../../UI/CircleIconButton/CircleIconButton";
import NavigationLink from "./NavigationLink/NavigationLink";

import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
	let button = null;
	if (props.button) {
		const { onClickButton = () => {} } = props;
		button = (
			<CircleIconButton
				icon="add"
				type="success"
				tooltip="Add wallet"
				style={{ width: "15px", height: "15px" }}
				onClick={onClickButton}
			/>
		);
	}

	return (
		<div className={classes.NavigationItem}>
			<div className={classes.header}>
				<p className={classes.title}>{props.title}</p>
				<div>{button}</div>
			</div>
			<div>
				{props.list.map(item => (
					<NavigationLink key={item._id} {...item}>
						{item.name}
					</NavigationLink>
				))}
			</div>
		</div>
	);
};

export default NavigationItem;
