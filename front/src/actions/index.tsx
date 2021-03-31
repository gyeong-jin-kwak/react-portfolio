export const REQUEST_DATA = "REQUEST_DATA" as const;
export const RECEIVE_DATA = "RECEIVE_DATA" as const;

// eslint-disable-next-line
export const requestData = () => ({
	type: REQUEST_DATA,
});

// eslint-disable-next-line
export const receiveData = (data: { quote: string }) => ({
	type: RECEIVE_DATA,
	data,
});
