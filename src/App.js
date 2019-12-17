import React, { useState } from "react";
import Layout from "./containers/Layout/Layout";
import MoneyPage from "./containers/MoneyPage/MoneyPage";

import avatar from "./assets/img/avatar.jpg";
const dummyUser = {
	email: "ptienchuan@gmail.com",
	name: "Chuan Pham",
	avatar: avatar
};

function App() {
	const [user] = useState(dummyUser);
	const [walletId, setWalletId] = useState("1");

	const onchangeWalletHandler = walletId => {
		setWalletId(walletId);
	};

	return (
		<Layout user={user} onchangeWallet={onchangeWalletHandler}>
			<MoneyPage walletId={walletId} />
		</Layout>
	);
}

export default App;
