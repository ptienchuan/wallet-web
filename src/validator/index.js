import validator from "validator";
import messages from "../constants/messages";

export const validName = (value, name = "") => {
	const valid = validator.isLength(value.toString().trim(), {
		min: 1,
		max: 50
	});
	return valid ? "" : messages.msgStringLength([name, 1, 50]);
};

export const validPrice = (value, name = "") => {
	const valid = validator.isInt(value.toString(), { min: 0 });
	return valid ? "" : messages.msgMustBeNumber([name]);
};

export const validNote = (value, name = "") => {
	const valid = validator.isLength(value.toString().trim(), { max: 150 });
	return valid ? "" : messages.msgStringMaxLength([name, 150]);
};

const myValidator = { validName, validPrice, validNote };

export default myValidator;
