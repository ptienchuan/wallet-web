import React from "react";
import PlanItems from "./PlanItems/PlanItems";
import CircleIconButton from "../../UI/CircleIconButton/CircleIconButton";

import classes from "./Plan.module.css";

const plan = props => {
	return (
		<div className={classes.Plan}>
			<div className={classes.header}>
				<p className={classes.title}>{props.title}</p>
				<CircleIconButton
					icon="add"
					type="success"
					style={{ width: "15px", height: "15px" }}
				/>
			</div>
			<div className={classes.money}>
				<PlanItems list={props.list} />
			</div>
		</div>
	);
};

export default plan;
