import React, { useState, useContext } from "react";
import numeral from "numeral";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import InputContainer from "../../UI/InputContainer/InputContainer";
import CompartmentContext from "../../../contexts/CompartmentContext";

import InputLabel from "../../UI/InputLabel/InputLabel";
import TextInput from "../../UI/TextInput/TextInput";
import Button from "../../UI/Button/Button";

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
					<InputContainer center>
						<h3>{props.compartment.name}</h3>
						<p className={classes.budget}>
							{numeral(displayNumber).format("0,0")}
						</p>
					</InputContainer>

					<InputContainer>
						<InputLabel forHtml="budget">Charging more</InputLabel>
						<TextInput
							type="number"
							id="budget"
							name="budget"
							value={budget}
							onChange={_inputChangeHandler}
						/>
					</InputContainer>

					<InputContainer center>
						<Button typeStyle="success">Charge</Button>
					</InputContainer>
				</form>
			</Body>
		</Modal>
	);
};

export default ChargingBudgetFormModal;
