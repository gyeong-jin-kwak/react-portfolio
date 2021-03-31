import React, { useEffect } from "react";
import GlobalStyles from "Components/GlobalStyles";

// test
import { useSelector, useDispatch } from "react-redux";
import { requestData } from "../actions/index";
import { RootReducerType } from "../reducers/rootReducer";

import Router from "./Router";

function App(): JSX.Element {
	// test
	const dispatch = useDispatch();
	const sagaData = useSelector((state: RootReducerType) => state.dataReducer);

	useEffect(() => {
		dispatch(requestData());
		console.log(sagaData);
	}, []);

	return (
		<>
			<Router />
			<GlobalStyles />

			{/* test */}
			<button
				onClick={() => {
					dispatch(requestData());
				}}
				type="button"
			>
				fetch
			</button>
			<div>{sagaData.quote}</div>
		</>
	);
}

export default App;
