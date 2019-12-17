import React, { useState, useEffect } from "react";
import Compartment from "../../components/MoneyPage/Compartment/Compartment";

import CompartmentContext from "../../contexts/CompartmentContext";
import classes from "./MoneyPage.module.css";

import dummyCompartments from "../../assets/dummyCompartments";

const MoneyPage = props => {
	const [compartments, setCompartments] = useState([]);

	useEffect(() => {
		// Mounted: handle fetch compartment by walletId
	}, []);

	useEffect(() => {
		setCompartments(dummyCompartments[props.walletId]);
	}, [props.walletId]);

	return (
		<div className={classes.MoneyPage}>
			{compartments.map(compartment => (
				<Compartment key={compartment._id} {...compartment} />
			))}
		</div>
	);
};

export default MoneyPage;
