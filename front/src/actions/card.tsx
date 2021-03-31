export const LOAD_CARDS_REQUEST = "LOAD_CARDS_REQUEST" as const;
export const LOAD_CARDS_SUCCESS = "LOAD_CARDS_SUCCESS" as const;
export const LOAD_CARDS_FAILURE = "LOAD_CARDS_FAILURE" as const;

export const cardRequest = () => ({
	type: LOAD_CARDS_REQUEST,
});

export const cardSuccess = () => ({
	type: LOAD_CARDS_SUCCESS,
});

export const cardFailure = () => ({
	type: LOAD_CARDS_FAILURE,
});
