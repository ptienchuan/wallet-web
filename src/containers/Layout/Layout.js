import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";

import WalletContext from "../../contexts/WalletContext";
import classes from "./Layout.module.css";

const Layout = props => {
	const [wallets, setWallets] = useState([]);

	useEffect(() => {
		axios.get("/wallets").then(response => {
			if (response.status === 200) {
				const data = response.data;
				if (data.length > 0) {
					data[0].active = true;
					setWallets(data);
				}
			}
		});
	}, []);

	if (wallets.length > 0 && props.walletId === null) {
		props.onchangeWallet(wallets[0]._id);
	}

	const activeWallet = id => {
		const newWallets = wallets.map(wallet => {
			if (wallet._id === id) {
				wallet.active = true;
			} else {
				wallet.active = false;
			}
			return wallet;
		});
		setWallets(newWallets);
		props.onchangeWallet(id);
	};

	const addWallet = ({ name = "New wallet" }) => {
		const newWallets = wallets.map(wallet => {
			wallet.active = false;
			return wallet;
		});

		axios.post("/wallets", { name }).then(response => {
			if (response.status === 201) {
				const newWallet = response.data;
				newWallet.active = true;
				newWallets.push(newWallet);
				setWallets(newWallets);
				props.onchangeWallet(newWallet._id);
			}
		});
	};

	return (
		<WalletContext.Provider
			value={{
				wallets,
				activeWallet,
				addWallet
			}}
		>
			<div className={classes.Layout}>
				<div className={classes.side}>
					<Sidebar user={props.user} wallets={wallets} />
				</div>
				<div className={classes.main}>
					<main>{props.children}</main>
				</div>
			</div>
		</WalletContext.Provider>
	);
};

export default Layout;
