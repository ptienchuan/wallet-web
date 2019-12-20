import React from "react";

import Modal from "../../../hoc/Modal/Modal";
import Header from "../../../hoc/Modal/Header/Header";
import Body from "../../../hoc/Modal/Body/Body";
import InputContainer from "../../../hoc/Form/InputContainer/InputContainer";

import InputLabel from "../../UI/InputLabel/InputLabel";
import TextInput from "../../UI/TextInput/TextInput";
import Button from "../../UI/Button/Button";

const walletFormModal = props => {
	return (
		<Modal>
			<Header title="Wallet" />
			<Body>
				<form>
					<InputContainer>
						<InputLabel htmlFor="name">Name</InputLabel>
						<TextInput type="text" id="name" name="name" />
					</InputContainer>

					<InputContainer center>
						<Button typeStyle="success">Regist</Button>
					</InputContainer>
				</form>
			</Body>
		</Modal>
	);
};

export default walletFormModal;
