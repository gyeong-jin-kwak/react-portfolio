import React from "react";
import GlobalStyles from "Components/GlobalStyles";
import Router from "./Router";

function App(): JSX.Element {
	return (
		<>
			<Router />
			<GlobalStyles />
		</>
	);
}

export default App;
