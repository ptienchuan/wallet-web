import React, { useState, useContext } from "react";
import numeral from "numeral";

import Modal, { Header, Body } from "../../Modal";
import CompartmentContext from "../../../contexts/CompartmentContext";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import validator from "../../../validator";

const CompartmentFormModal = props => {
	let defaultCompartment = { name: "", budget: 0 };
	if (props.compartment) {
		defaultCompartment = { ...props.compartment };
	}
	const [compartment, _setCompartment] = useState(defaultCompartment);
	const [errors, _setErrors] = useState({
		name: "",
		budget: ""
	});

	const rules = {
		name: validator.validName,
		budget: validator.validPrice
	};

	const { addCompartment, changeCompartment } = useContext(
		CompartmentContext
	);

	const _changeInputHandler = e => {
		const newCompartment = { ...compartment };
		const { name, value } = e.target;
		const label = e.target.getAttribute("label");

		// update state
		newCompartment[name] = value;
		_setCompartment(newCompartment);

		// validation
		const rule = rules[name];
		_setErrors(prevErrors => {
			let newErrors = { ...prevErrors };
			newErrors[name] = rule(value, label);
			return newErrors;
		});
	};

	const _formValid = () => {
		const checkFields = Object.keys(rules);
		const errorList = [];
		for (const field of checkFields) {
			const rule = rules[field];
			const val = compartment[field];
			errorList.push(rule(val));
		}
		return errorList.every(err => err === "");
	};

	const _submitHandler = async e => {
		e.preventDefault();
		if (_formValid()) {
			if (compartment._id) {
				await changeCompartment(props.compartment._id, {
					name: compartment.name
				});
			} else {
				await addCompartment(compartment);
			}
			props.onClose();
		}
	};

	return (
		<Modal>
			<Header title="Compartment" onClickButton={props.onClose} />
			<Body>
				<form onSubmit={_submitHandler}>
					<Input
						element="text"
						label="Name"
						type="text"
						id="name"
						name="name"
						autoComplete="off"
						value={compartment.name}
						onChange={_changeInputHandler}
						error={errors.name}
					/>

					<Input
						element="text"
						label="Budget"
						type="text"
						id="budget"
						name="budget"
						value={
							compartment._id
								? numeral(compartment.budget).format("0,0")
								: compartment.budget
						}
						onChange={_changeInputHandler}
						disabled={compartment._id ? true : false}
						error={compartment._id ? "" : errors.budget}
					/>

					<div style={{ textAlign: "center", marginTop: "15px" }}>
						<Button
							color="success"
							disabled={_formValid() ? "" : "disabled"}
						>
							Regist
						</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default CompartmentFormModal;
