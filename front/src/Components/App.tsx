import React, { useEffect } from "react";
import GlobalStyles from "Components/GlobalStyles";
import Router from "./Router";

//test
import { requestData } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerType } from "../reducers/rootReducer";

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
			>
				fetch
			</button>
			<div>{sagaData.quote}</div>
		</>
	);
}

export default App;
