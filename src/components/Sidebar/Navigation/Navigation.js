import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

const navigation = props => {
	const settingList = [
		{
			_id: "1",
			name: "Action"
		}
	];

	return (
		<nav className={classes.Navigation}>
			<NavigationItem title="wallets" list={props.wallets} />
			<NavigationItem title="settings" list={settingList} />
		</nav>
	);
};

export default navigation;
