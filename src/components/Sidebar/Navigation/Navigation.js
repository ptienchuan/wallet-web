import React, { useState } from "react";

import WalletFormModal from "../WalletFormModal/WalletFormModal";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

const Navigation = props => {
	const [showingForm, setShowingForm] = useState(false);
	const openForm = () => {
		setShowingForm(true);
	};
	const closeForm = () => {
		setShowingForm(false);
	};

	const settingList = [
		{
			_id: "1",
			name: "Action"
		}
	];

	return (
		<nav className={classes.Navigation}>
			{!showingForm ? null : <WalletFormModal onClose={closeForm} />}
			<NavigationItem
				button
				title="wallets"
				list={props.wallets}
				onClickButton={openForm}
			/>
			<NavigationItem title="settings" list={settingList} />
		</nav>
	);
};

export default Navigation;
