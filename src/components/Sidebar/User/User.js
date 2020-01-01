import React from "react";
import Button from "../../UI/Button/Button";

import classes from "./User.module.css";

const user = props => {
	return (
		<div className={classes.User}>
			<img src={props.user.avatar} alt="Avatar" />
			<div className={classes.info}>
				<p>{props.user.name}</p>
				<p>{props.user.email}</p>
				<div className={classes.buttons}>
					<Button>Change</Button>
					<Button color="danger">Logout</Button>
				</div>
			</div>
		</div>
	);
};

export default user;
