import React, { useState, useContext } from "react";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import InputContainer from "../../UI/InputContainer/InputContainer";
import CompartmentContext from "../../../contexts/CompartmentContext";

import InputLabel from "../../UI/InputLabel/InputLabel";
import TextInput from "../../UI/TextInput/TextInput";
import Button from "../../UI/Button/Button";
import RadioInput from "../../UI/RadioInput/RadioInput";

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
					<InputContainer>
						<InputLabel htmlFor="name">Name</InputLabel>
						<TextInput
							type="text"
							id="name"
							name="name"
							autoComplete="off"
							value={money.name}
							onChange={_inputChangeHandler}
						/>
					</InputContainer>

					<InputContainer>
						<InputLabel htmlFor="cost">Cost</InputLabel>
						<TextInput
							type="number"
							id="cost"
							name="cost"
							value={money.cost}
							onChange={_inputChangeHandler}
						/>
					</InputContainer>

					<InputContainer>
						<InputLabel htmlFor="note">Note</InputLabel>
						<TextInput
							type="text"
							id="note"
							name="note"
							autoComplete="off"
							value={money.note}
							onChange={_inputChangeHandler}
						/>
					</InputContainer>

					<InputContainer>
						<InputLabel>Plan / Spended</InputLabel>
						<RadioInput
							name="spended"
							value="false"
							title="Plan"
							checked={!money.spended}
							onChange={_radioChangeHandler}
						/>
						<RadioInput
							name="spended"
							value="true"
							title="Spended"
							checked={money.spended}
							onChange={_radioChangeHandler}
						/>
					</InputContainer>

					<InputContainer center>
						<Button typeStyle="success">Regist</Button>
					</InputContainer>
				</form>
			</Body>
		</Modal>
	);
};

export default MoneyFormModal;
