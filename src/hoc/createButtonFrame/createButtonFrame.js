import React, { useState } from "react";
import classes from "./ButtonFrame.module.css";

const createButtonFrame = (FireButton, Body) => {
	return props => {
		const [showingFrame, setShowingFrame] = useState(false);

		let frameClasses = [classes.frame];
		if (showingFrame) {
			frameClasses.push(classes.show);
		}

		let frameWidth = "auto";
		if (Body.props.children && Body.props.children.length > 0) {
			const numberOfBodyItem = Body.props.children.length;
			frameWidth = numberOfBodyItem * 28 + (numberOfBodyItem - 1) * 7;
		}

		return (
			<div
				className={classes.ButtonFrame}
				onClick={() => setShowingFrame(!showingFrame)}
			>
				{FireButton}
				<div
					className={frameClasses.join(" ")}
					style={{ width: frameWidth }}
					onClick={() => setShowingFrame(false)}
				>
					{Body}
				</div>
			</div>
		);
	};
};

export default createButtonFrame;
