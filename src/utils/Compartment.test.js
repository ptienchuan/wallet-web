const calculateBudget = require("./Compartment");

const compartment1 = {
	budget: 9000000,
	money: [
		{
			cost: 1000000,
			spended: true
		},
		{
			cost: 2000000,
			spended: false
		}
	]
};
test("Should calculated right with spended and not spended money", () => {
	const budget = calculateBudget(compartment1);
	expect(budget).toBe(8000000);
});

const compartment2 = {
	budget: 9000000,
	money: [
		{
			cost: 1000000,
			spended: true
		}
	]
};
test("Should calculated right with only spended money", () => {
	const budget = calculateBudget(compartment2);
	expect(budget).toBe(8000000);
});

const compartment3 = {
	budget: 9000000,
	money: [
		{
			cost: 1000000,
			spended: false
		}
	]
};
test("Should calculated right with only not spended money", () => {
	const budget = calculateBudget(compartment3);
	expect(budget).toBe(9000000);
});

const compartment4 = {
	budget: 9000000,
	money: []
};
test("Should calculated right with empty money", () => {
	const budget = calculateBudget(compartment4);
	expect(budget).toBe(9000000);
});

const compartment5 = {
	budget: 9000000
};
test("Should calculated right with undefined money", () => {
	const budget = calculateBudget(compartment5);
	expect(budget).toBe(9000000);
});
