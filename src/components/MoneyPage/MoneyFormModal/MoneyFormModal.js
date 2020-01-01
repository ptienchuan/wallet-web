import React, { useState, useContext } from "react";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import CompartmentContext from "../../../contexts/CompartmentContext";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

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
	const _inputChangeHandler = e => {
		const newMoney = { ...money };
		newMoney[e.target.name] = e.target.value;
		_setMoney(newMoney);
	};
	const _radioChangeHandler = e => {
		const newMoney = { ...money };
		newMoney.spended = e.target.value === "true";
		_setMoney(newMoney);
	};

	const { addMoney, changeMoney } = useContext(CompartmentContext);

	const _submitHandler = async e => {
		e.preventDefault();
		if (money.name.trim() !== "" && money.cost >= 0) {
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
						type="text"
						id="name"
						name="name"
						autoComplete="off"
						value={money.name}
						onChange={_inputChangeHandler}
					/>
					<Input
						element="text"
						label="Cost"
						type="number"
						id="cost"
						name="cost"
						value={money.cost}
						onChange={_inputChangeHandler}
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
						<Button color="success">Regist</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default MoneyFormModal;
