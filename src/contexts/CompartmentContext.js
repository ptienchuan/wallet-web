import { createContext } from "react";

const CompartmentContext = createContext({
	addCompartment: () => {},
	changeCompartment: () => {},
	chargeBudget: () => {},
	removeCompartment: () => {},
	addMoney: () => {},
	changeMoney: () => {},
	removeMoney: () => {}
});

export default CompartmentContext;
