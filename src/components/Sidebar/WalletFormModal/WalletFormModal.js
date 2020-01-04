import React, { useState, useContext } from "react";

import Modal, { Header, Body } from "../../Modal";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import WalletContext from "../../../contexts/WalletContext";
import { validName } from "../../../validator";

const WalletFormModal = props => {
	const [wallet, _setWallet] = useState({ name: "" });
	const [nameError, _setNameError] = useState("");
	const { addWallet } = useContext(WalletContext);

	const _changeInputHandler = e => {
		const newWallet = { ...wallet };
		const { value } = e.target;
		// update state
		newWallet.name = value;
		_setWallet(newWallet);
		// validation
		const err = validName(value, "Name");
		if (err !== nameError) {
			_setNameError(err);
		}
	};

	const _validForm = () => (validName(wallet.name) ? false : true);

	const _submitHandler = e => {
		e.preventDefault();
		if (_validForm()) {
			addWallet(wallet);
			props.onClose();
		}
	};

	return (
		<Modal>
			<Header title="Wallet" onClickButton={props.onClose} />
			<Body>
				<form onSubmit={_submitHandler}>
					<Input
						element="text"
						label="Name"
						type="text"
						id="name"
						name="name"
						autoComplete="off"
						value={wallet.name}
						onChange={_changeInputHandler}
						error={nameError}
					/>

					<div style={{ textAlign: "center", marginTop: "15px" }}>
						<Button
							color="success"
							disabled={_validForm() ? "" : "disabled"}
						>
							Regist
						</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default WalletFormModal;
