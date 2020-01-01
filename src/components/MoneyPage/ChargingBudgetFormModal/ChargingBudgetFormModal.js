import React, { useState, useContext } from "react";
import numeral from "numeral";
import { isInt } from "validator";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import CompartmentContext from "../../../contexts/CompartmentContext";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { msgMustBeNumber } from "../../../constants/messages";

import classes from "./ChargingBudgetFormModal.module.css";

const ChargingBudgetFormModal = props => {
	const [budget, _setBudget] = useState(0);
	let validBudget = isInt(budget.toString(), { min: 0 });
	let budgetError = validBudget ? "" : msgMustBeNumber(["Charging more"]);

	let displayNumber = parseInt(props.compartment.budget);
	if (validBudget) {
		displayNumber += parseInt(budget);
	}

	const { chargeBudget } = useContext(CompartmentContext);

	const _inputChangeHandler = e => {
		_setBudget(e.target.value);
	};

	const _submitHandler = async e => {
		e.preventDefault();
		if (validBudget) {
			if (budget > 0) {
				await chargeBudget(props.compartment._id, budget);
			}
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
						id="budget"
						name="budget"
						value={budget}
						onChange={_inputChangeHandler}
						error={budgetError}
					/>

					<div
						className={classes.center}
						style={{ marginTop: "15px" }}
					>
						<Button
							color="success"
							disabled={validBudget ? "" : "disabled"}
						>
							Charge
						</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default ChargingBudgetFormModal;
