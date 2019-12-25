import React, { useState } from "react";

import Button from "../UI/Button/Button";
import ConparmentFormModal from "../MoneyPage/CompartmentFormModal/CompartmentFormModal";

import classes from "./Toolbar.module.css";

const Toolbar = props => {
	const [showingForm, setShowingForm] = useState(false);
	const openForm = () => {
		setShowingForm(true);
	};
	const closeForm = () => {
		setShowingForm(false);
	};

	return (
		<div className={classes.Toolbar}>
			{!showingForm ? null : <ConparmentFormModal onClose={closeForm} />}
			<Button typeStyle="success" onClick={openForm}>
				Add compartment
			</Button>
		</div>
	);
};

export default Toolbar;
