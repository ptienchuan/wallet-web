export const msgMustBeNumber = injection =>
	`${injection[0]} phải là một số lớn hơn 0`;

export const msgStringLength = injection =>
	`${injection[0]} bắt buộc phải chứa từ ${injection[1]} đến ${injection[2]} ký tự`;

const messages = { msgMustBeNumber, msgStringLength };

export default messages;
