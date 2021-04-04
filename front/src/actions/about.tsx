export const LOAD_ABOUT_REQUEST = "LOAD_ABOUT_REQUEST" as const;
export const LOAD_ABOUT_SUCCESS = "LOAD_ABOUT_SUCCESS" as const;
export const LOAD_ABOUT_FAILURE = "LOAD_ABOUT_FAILURE" as const;

export const aboutRequest = () => ({
	type: LOAD_ABOUT_REQUEST,
});

export const aboutSuccess = () => ({
	type: LOAD_ABOUT_SUCCESS,
});

export const aboutFailure = () => ({
	type: LOAD_ABOUT_FAILURE,
});
