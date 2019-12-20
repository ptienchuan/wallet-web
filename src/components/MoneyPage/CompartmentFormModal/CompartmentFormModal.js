import React from "react";

import Modal from "../../../hoc/Modal/Modal";
import Header from "../../../hoc/Modal/Header/Header";
import Body from "../../../hoc/Modal/Body/Body";
import InputContainer from "../../../hoc/Form/InputContainer/InputContainer";

import Button from "../../UI/Button/Button";
import TextInput from "../../UI/TextInput/TextInput";
import InputLabel from "../../UI/InputLabel/InputLabel";

const compartmentFormModal = props => {
	const cancelHandler = () => props.cancel();
	const submitHandler = () => {
		// changing data handler

		props.cancel();
	};

	return (
		<Modal onClickBackdrop={cancelHandler}>
			<Header title="Compartment" />
			<Body>
				<form onSubmit={submitHandler}>
					<InputContainer>
						<InputLabel htmlFor="name">Name</InputLabel>
						<TextInput
							type="text"
							id="name"
							name="name"
							autoComplete="off"
						/>
					</InputContainer>

					<InputContainer>
						<InputLabel htmlFor="buget">Buget</InputLabel>
						<TextInput type="number" id="buget" name="buget" />
					</InputContainer>

					<InputContainer center>
						<Button className typeStyle="success">
							Regist
						</Button>
					</InputContainer>
				</form>
			</Body>
		</Modal>
	);
};

export default compartmentFormModal;
