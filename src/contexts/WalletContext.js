import { createContext } from "react";

const walletContext = createContext({
	wallets: [],
	activeWallet: () => {}
});

export default walletContext;
