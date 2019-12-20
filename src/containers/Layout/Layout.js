import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Toolbar from "../../components/Toolbar/Toolbar";
import MoneyFormModal from "../../components/MoneyPage/CompartmentFormModal/CompartmentFormModal";

import WalletContext from "../../contexts/WalletContext";
import classes from "./Layout.module.css";

import dummyWallets from "../../assets/dummyWallets";
dummyWallets[0].active = true;

const Layout = props => {
	const [wallets, setWallets] = useState(dummyWallets);

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

	return (
		<WalletContext.Provider
			value={{
				wallets,
				activeWallet
			}}
		>
			<div className={classes.Layout}>
				<MoneyFormModal />
				<div className={classes.side}>
					<Sidebar user={props.user} wallets={wallets} />
				</div>
				<div className={classes.main}>
					<Toolbar />
					<main>{props.children}</main>
				</div>
			</div>
		</WalletContext.Provider>
	);
};

export default Layout;
