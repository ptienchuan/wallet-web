import React, { useState, useContext } from "react";
import numeral from "numeral";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";

import CompartmentContext from "../../../contexts/CompartmentContext";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const CompartmentFormModal = props => {
	let defaultCompartment = { name: "", budget: 0 };
	if (props.compartment) {
		defaultCompartment = { ...props.compartment };
	}
	const [compartment, _setCompartment] = useState(defaultCompartment);
	const _changeInputHandler = e => {
		const newCompartment = { ...compartment };
		newCompartment[e.target.name] = e.target.value;
		_setCompartment(newCompartment);
	};

	const { addCompartment, changeCompartment } = useContext(
		CompartmentContext
	);

	const _submitHandler = async e => {
		e.preventDefault();
		if (compartment.name.trim() !== "" && compartment.budget >= 0) {
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
					/>

					<Input
						element="text"
						label="Budget"
						type={compartment._id ? "text" : "number"}
						id="budget"
						name="budget"
						value={
							compartment._id
								? numeral(compartment.budget).format("0,0")
								: compartment.budget
						}
						onChange={_changeInputHandler}
						disabled={compartment._id ? true : false}
					/>

					<div style={{ textAlign: "center", marginTop: "15px" }}>
						<Button color="success">Regist</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default CompartmentFormModal;
