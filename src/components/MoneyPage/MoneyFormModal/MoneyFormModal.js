import React from "react";

import Modal from "../../../hoc/Modal/Modal";
import Header from "../../../hoc/Modal/Header/Header";
import Body from "../../../hoc/Modal/Body/Body";
import InputContainer from "../../../hoc/Form/InputContainer/InputContainer";

import InputLabel from "../../UI/InputLabel/InputLabel";
import TextInput from "../../UI/TextInput/TextInput";
import Button from "../../UI/Button/Button";

const moneyFormModal = props => {
	return (
		<Modal>
			<Header title="Money" />
			<Body>
				<form>
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
						<InputLabel htmlFor="cost">Cost</InputLabel>
						<TextInput type="number" id="cost" name="cost" />
					</InputContainer>

					<InputContainer>
						<InputLabel htmlFor="note">Note</InputLabel>
						<TextInput
							type="text"
							id="note"
							name="note"
							autoComplete="off"
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

export default moneyFormModal;
