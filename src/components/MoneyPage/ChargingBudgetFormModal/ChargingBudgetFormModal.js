import React, { useState, useContext } from "react";
import numeral from "numeral";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import CompartmentContext from "../../../contexts/CompartmentContext";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import classes from "./ChargingBudgetFormModal.module.css";

const ChargingBudgetFormModal = props => {
	const [budget, _setBudget] = useState(0);
	const _inputChangeHandler = e => {
		_setBudget(e.target.value);
	};

	let displayNumber = parseInt(props.compartment.budget);
	if (budget !== "" && budget > 0) {
		displayNumber += parseInt(budget);
	}

	const { chargeBudget } = useContext(CompartmentContext);

	const _submitHandler = async e => {
		e.preventDefault();
		if (budget > 0) {
			await chargeBudget(props.compartment._id, budget);
			props.onClose();
		}
	};

	return (
		<Modal>
			<Header title="Charge budget" onClickButton={props.onClose} />
			<Body>
				<form onSubmit={_submitHandler}>
					<div className={classes.center}>
						<h3>{props.compartment.name}</h3>
						<p className={classes.Budget}>
							{numeral(displayNumber).format("0,0")}
						</p>
					</div>

					<Input
						element="text"
						label="Charging more"
						type="number"
						id="budget"
						name="budget"
						value={budget}
						onChange={_inputChangeHandler}
					/>

					<div
						className={classes.center}
						style={{ marginTop: "15px" }}
					>
						<Button typeStyle="success">Charge</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default ChargingBudgetFormModal;
