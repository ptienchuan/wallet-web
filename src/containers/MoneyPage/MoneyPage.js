import React, { useState, useEffect } from "react";
import axios from "axios";

import Toolbar from "../../components/Toolbar/Toolbar";
import Compartment from "../../components/MoneyPage/Compartment/Compartment";
import CompartmentContext from "../../contexts/CompartmentContext";
import classes from "./MoneyPage.module.css";

const MoneyPage = props => {
	const [compartments, _setCompartments] = useState([]);
	const { walletId } = props;

	useEffect(() => {
		if (walletId !== null) {
			axios
				.get("/compartments", {
					params: {
						wallet: walletId,
						fetchMoney: true
					}
				})
				.then(response => {
					if (response.status === 200) {
						_setCompartments(response.data);
					}
				})
				.catch(error => {
					_setCompartments([]);
				});
		}
	}, [walletId]);

	/**
	 * Compartment API:
	 * add
	 * change
	 * charge budget
	 * remove
	 */
	const addCompartment = async ({ name = "New compartment", budget = 0 }) => {
		const response = await axios.post("/compartments", {
			name,
			budget,
			wallet: walletId
		});

		if (response.status === 201) {
			const newCompartment = response.data;
			newCompartment.money = [];
			_setCompartments(prevState => [...prevState, newCompartment]);
		}
	};

	const changeCompartment = async (_id, { name = "" }) => {
		const response = await axios.put(`/compartments/${_id}`, {
			name: name
		});

		if (response.status === 200) {
			_setCompartments(prevState => {
				const newState = [...prevState];
				const index = newState.findIndex(
					compartment => compartment._id === _id
				);
				newState[index].name = name;
				return newState;
			});
		}
	};

	const chargeBudget = async (_id, budget) => {
		if (budget > 0) {
			const cIndex = compartments.findIndex(
				compartment => compartment._id === _id
			);
			const newBudget =
				parseInt(compartments[cIndex].budget) + parseInt(budget);

			const response = await axios.put(`/compartments/${_id}`, {
				budget: newBudget
			});

			if (response.status === 200) {
				_setCompartments(prevState => {
					const newState = [...prevState];
					newState[cIndex].budget = newBudget;
					return newState;
				});
			}
		}
	};

	const removeCompartment = async _id => {
		const response = await axios.delete(`/compartments/${_id}`);

		if (response.status === 200) {
			_setCompartments(prevState => {
				const newState = [...prevState];
				const index = newState.findIndex(
					compartment => compartment._id === _id
				);
				newState.splice(index, 1);
				return newState;
			});
		}
	};

	/**
	 * Money API:
	 * add
	 * change spended flag
	 * remove
	 */
	const addMoney = async (
		compartmentId,
		{ name = "New money", cost = 0, spended = false, note = "" }
	) => {
		const response = await axios.post("/money", {
			name,
			cost,
			spended,
			note,
			compartment: compartmentId
		});

		if (response.status === 201) {
			_setCompartments(prevState => {
				const newState = [...prevState];
				const compartmentIndex = newState.findIndex(
					compartment => compartment._id === compartmentId
				);
				newState[compartmentIndex].money.push(response.data);
				return newState;
			});
		}
	};

	const changeMoney = async (_id, data) => {
		const changeFields = ["name", "cost", "spended", "note"];
		const updateMoney = {};
		for (const field of changeFields) {
			if (data[field] !== undefined) {
				updateMoney[field] = data[field];
			}
		}

		const response = await axios.put(`/money/${_id}`, updateMoney);

		if (response.status === 200) {
			_setCompartments(prevState => {
				for (const index in prevState) {
					const moneyIndex = prevState[index].money.findIndex(
						money => money._id === _id
					);
					if (moneyIndex !== -1) {
						const newState = [...prevState];
						newState[index].money[moneyIndex] = response.data;
						return newState;
					}
				}
			});
		}
	};

	const removeMoney = async _id => {
		const response = await axios.delete(`/money/${_id}`);

		if (response.status === 200) {
			_setCompartments(prevState => {
				for (const index in prevState) {
					const moneyIndex = prevState[index].money.findIndex(
						money => money._id === _id
					);
					if (moneyIndex !== -1) {
						const newCompartments = [...prevState];
						newCompartments[index].money.splice(moneyIndex, 1);
						return newCompartments;
					}
				}
			});
		}
	};

	return (
		<CompartmentContext.Provider
			value={{
				addCompartment,
				changeCompartment,
				chargeBudget,
				addMoney,
				changeMoney,
				removeMoney
			}}
		>
			<Toolbar />
			<div className={classes.MoneyPage}>
				{compartments.map(compartment => (
					<Compartment
						key={compartment._id}
						{...compartment}
						onRemove={removeCompartment}
					/>
				))}
			</div>
		</CompartmentContext.Provider>
	);
};

export default MoneyPage;
