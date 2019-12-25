import React, { useState, useContext } from "react";
import numeral from "numeral";
import CircleIconButton from "../../../UI/CircleIconButton/CircleIconButton";
import SquareIconButton from "../../../UI/SquareIconButton/SquareIconButton";
import MoneyFormModal from "../../MoneyFormModal/MoneyFormModal";
import CompartmentContext from "../../../../contexts/CompartmentContext";
import createButtonFrame from "../../../../hoc/createButtonFrame/createButtonFrame";

import classes from "./Money.module.css";

const Money = props => {
	const [showingForm, setShowingForm] = useState(false);

	let note = null;
	if (props.note) {
		note = <p className={classes.note}>Note: {props.note}</p>;
	}

	const { changeMoney, removeMoney } = useContext(CompartmentContext);

	const ButtonFrame = createButtonFrame(
		<SquareIconButton
			icon="more"
			type="transparent"
			tooltip="Xem thêm tùy chọn"
		/>,
		<>
			<CircleIconButton
				icon={props.spended ? "reverse" : "success"}
				type={props.spended ? "warning" : "success"}
				tooltip={
					props.spended ? "Đánh dấu chưa tiêu" : "Đánh dấu đã tiêu"
				}
				onClick={() =>
					changeMoney(props._id, { spended: !props.spended })
				}
			/>
			<CircleIconButton
				icon="edit"
				type="warning"
				tooltip="Sửa"
				onClick={() => setShowingForm(true)}
			/>
			<CircleIconButton
				icon="close"
				type="danger"
				tooltip="Xóa"
				onClick={() => removeMoney(props._id)}
			/>
		</>
	);

	return (
		<>
			{!showingForm ? null : (
				<MoneyFormModal
					money={{
						_id: props._id,
						name: props.name,
						cost: props.cost,
						spended: props.spended,
						note: props.note
					}}
					onClose={() => setShowingForm(false)}
				/>
			)}
			<div className={classes.Money}>
				<div className={classes.header}>
					<div className={classes.info}>
						<p>{props.name}</p>
						<p
							className={[classes.cost, classes[props.type]].join(
								" "
							)}
						>
							{numeral(props.cost).format("0,0")}
						</p>
					</div>
					<div className={classes.buttons}>
						<ButtonFrame />
					</div>
				</div>
				{note}
			</div>
		</>
	);
};

export default Money;
