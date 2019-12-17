import React, { useContext } from "react";

import WalletContext from "../../../../../contexts/WalletContext";
import classes from "./NavigationLink.module.css";

const NavigationLink = props => {
	const walletContext = useContext(WalletContext);

	const usingClass = [classes.NavigationLink];
	if (props.active) {
		usingClass.push(classes.active);
	}
	return (
		<a
			href={props.link}
			className={usingClass.join(" ")}
			onClick={() => walletContext.activeWallet(props._id)}
		>
			{props.children}
		</a>
	);
};

export default NavigationLink;
