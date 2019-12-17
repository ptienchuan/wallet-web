import React from "react";
import User from "./User/User";
import Navigation from "./Navigation/Navigation";

import classes from "./Sidebar.module.css";

const sidebar = props => {
	return (
		<div className={classes.Sidebar}>
			<div>LOGO</div>
			<User user={props.user} />
			<Navigation wallets={props.wallets} />
		</div>
	);
};

export default sidebar;
