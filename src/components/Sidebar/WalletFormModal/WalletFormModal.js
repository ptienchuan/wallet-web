import React, { useState, useContext } from "react";

import Modal from "../../Modal/Modal";
import Header from "../../Modal/Header/Header";
import Body from "../../Modal/Body/Body";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

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
					<Input
						element="text"
						label="Name"
						type="text"
						id="name"
						name="name"
						autoComplete="off"
						value={wallet.name}
						onChange={changeInputHandler}
						required
					/>

					<div style={{ textAlign: "center", marginTop: "15px" }}>
						<Button typeStyle="success">Regist</Button>
					</div>
				</form>
			</Body>
		</Modal>
	);
};

export default WalletFormModal;
