export const calculateBudget = compartment => {
	let budget = parseInt(compartment.budget);
	const { money = [] } = compartment;
	for (const moneyItem of money) {
		const multi = moneyItem.spended === true ? -1 : 0;
		budget += parseInt(moneyItem.cost) * multi;
	}
	return budget;
};
