import { createContext } from "react";

const walletContext = createContext({
	wallets: [],
	activeWallet: () => {},
	addWallet: () => {}
});

export default walletContext;
