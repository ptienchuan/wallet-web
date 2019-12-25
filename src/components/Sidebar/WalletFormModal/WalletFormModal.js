import React, { useState, useContext } from "react";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";
import InputContainer from "../../UI/InputContainer/InputContainer";

import InputLabel from "../../UI/InputLabel/InputLabel";
import TextInput from "../../UI/TextInput/TextInput";
import Button from "../../UI/Button/Button";

import WalletContext from "../../../contexts/WalletContext";

const WalletFormModal = props => {
	const [wallet, setWallet] = useState({ name: "" });
	const changeInputHandler = e => {
		const newWallet = { ...wallet };
		newWallet.name = e.target.value;
		setWallet(newWallet);
	};

	const { addWallet } = useContext(WalletContext);
	const submitHandler = e => {
		e.preventDefault();
		if (wallet.name.trim() !== "") {
			addWallet(wallet);
			props.onClose();
		}
	};

	return (
		<Modal>
			<Header title="Wallet" onClickButton={props.onClose} />
			<Body>
				<form onSubmit={submitHandler}>
					<InputContainer>
						<InputLabel htmlFor="name">Name</InputLabel>
						<TextInput
							type="text"
							id="name"
							name="name"
							autoComplete="off"
							value={wallet.name}
							onChange={changeInputHandler}
							required
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

export default WalletFormModal;
