import React, { useState, useContext } from "react";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import CompartmentContext from "../../../contexts/CompartmentContext";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import validator from "../../../validator";

const MoneyFormModal = props => {
	let defaultMoney = {
		name: "",
		cost: 0,
		spended: false,
		note: ""
	};
	if (props.money) {
		defaultMoney = { ...props.money };
	}
	const [money, _setMoney] = useState(defaultMoney);
	const [errors, _setErrors] = useState({
		name: "",
		cost: "",
		note: ""
	});
	const { addMoney, changeMoney } = useContext(CompartmentContext);

	const rules = {
		name: validator.validName,
		cost: validator.validPrice,
		note: validator.validNote
	};

	const _inputChangeHandler = e => {
		const newMoney = { ...money };
		const { name, value } = e.target;
		const label = e.target.getAttribute("label");
		// update state
		newMoney[name] = value;
		_setMoney(newMoney);
		// validation
		_setErrors(prevErrors => {
			const newErrors = { ...prevErrors };
			const rule = rules[name];
			newErrors[name] = rule(value, label);
			return newErrors;
		});
	};

	const _radioChangeHandler = e => {
		const newMoney = { ...money };
		newMoney.spended = e.target.value === "true";
		_setMoney(newMoney);
	};

	const _formValid = () => {
		const checkFields = Object.keys(rules);
		let errorList = [];
		for (const field of checkFields) {
			const rule = rules[field];
			const val = money[field];
			errorList.push(rule(val));
		}
		return errorList.every(err => err === "");
	};

	const _submitHandler = async e => {
		e.preventDefault();
		if (_formValid()) {
			if (money._id) {
				await changeMoney(money._id, money);
			} else {
				await addMoney(props.compartment._id, money);
			}
			props.onClose();
		}
	};

	return (
		<Modal>
			<Header title="Money" onClickButton={props.onClose} />
			<Body>
				<form onSubmit={_submitHandler}>
					<Input
						element="text"
						label="Name"
						id="name"
						name="name"
						autoComplete="off"
						value={money.name}
						onChange={_inputChangeHandler}
						error={errors.name}
					/>
					<Input
						element="text"
						label="Cost"
						id="cost"
						name="cost"
						value={money.cost}
						onChange={_inputChangeHandler}
						error={errors.cost}
					/>
					<Input
						element="textarea"
						label="Note"
						id="note"
						name="note"
						row="2"
						style={{ resize: "none" }}
						value={money.note}
						onChange={_inputChangeHandler}
						error={errors.note}
					/>

					<Input
						element="radio"
						label="Plan / Spended"
						itemList={[
							{
								name: "spended",
								value: "false",
								title: "Plan",
								checked: !money.spended,
								onChange: _radioChangeHandler
							},
							{
								name: "spended",
								value: "true",
								title: "Spended",
								checked: money.spended,
								onChange: _radioChangeHandler
							}
						]}
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

export default MoneyFormModal;
