import React from "react";
import Money from "../Money/Money";

const PlanItems = props => {
	return (
		<>
			{props.list.map(item => (
				<Money
					key={item._id}
					{...item}
					type={item.spended ? "danger" : "success"}
				/>
			))}
		</>
	);
};

export default PlanItems;
