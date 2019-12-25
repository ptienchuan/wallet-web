import React, { useState } from "react";
import numeral from "numeral";

import ChargingBudgetFormModal from "../ChargingBudgetFormModal/ChargingBudgetFormModal";
import MoneyFormModal from "../MoneyFormModal/MoneyFormModal";
import CompartmentFormModal from "../CompartmentFormModal/CompartmentFormModal";
import Plan from "../Plan/Plan";
import CircleIconButton from "../../UI/CircleIconButton/CircleIconButton";
import SquareIconButton from "../../UI/SquareIconButton/SquareIconButton";
import createButtonFrame from "../../../hoc/createButtonFrame/createButtonFrame";

import classes from "./Compartment.module.css";

const Compartment = props => {
	const [showingBudgetForm, setShowingBudgetForm] = useState(false);
	const [showingMoneyForm, setShowingMoneyForm] = useState(false);
	const [showingCompartmentForm, setShowingCompartmentForm] = useState(false);

	const propMoney = [...props.money];
	const [money, spended] = propMoney.reduce(
		(total, plan) => {
			if (plan.spended) {
				total[1] = total[1].concat(plan);
			} else {
				total[0] = total[0].concat(plan);
			}
			return total;
		},
		[[], []]
	);

	const ButtonFrame = createButtonFrame(
		<SquareIconButton
			icon="more"
			type="transparent"
			tooltip="Xem thêm tùy chọn"
		/>,
		<>
			<CircleIconButton
				icon="add"
				type="success"
				tooltip="Thêm khoản tiền"
				onClick={() => setShowingMoneyForm(true)}
			/>
			<CircleIconButton
				icon="card"
				type="success"
				tooltip="Nạp tiền"
				onClick={() => setShowingBudgetForm(true)}
			/>
			<CircleIconButton
				icon="edit"
				type="warning"
				tooltip="Sửa"
				onClick={() => setShowingCompartmentForm(true)}
			/>
			<CircleIconButton
				icon="close"
				type="danger"
				tooltip="Xóa"
				onClick={() => props.onRemove(props._id)}
			/>
		</>
	);

	return (
		<>
			{!showingBudgetForm ? null : (
				<ChargingBudgetFormModal
					onClose={() => setShowingBudgetForm(false)}
					compartment={{
						_id: props._id,
						name: props.name,
						budget: props.budget
					}}
				/>
			)}
			{!showingMoneyForm ? null : (
				<MoneyFormModal
					onClose={() => setShowingMoneyForm(false)}
					compartment={{ _id: props._id }}
				/>
			)}
			{!showingCompartmentForm ? null : (
				<CompartmentFormModal
					compartment={{
						_id: props._id,
						name: props.name,
						budget: props.budget
					}}
					onClose={() => setShowingCompartmentForm(false)}
				/>
			)}
			<div className={classes.Compartment}>
				<div className={classes.header}>
					<h3>{props.name}</h3>
					<div className={classes.controls}>
						<ButtonFrame />
					</div>
				</div>
				<div className={classes.budget}>
					<p>{numeral(props.budget).format("0,0")}</p>
				</div>
				<Plan title="plans" list={money} />
				<Plan title="spended" list={spended} />
			</div>
		</>
	);
};

export default Compartment;
