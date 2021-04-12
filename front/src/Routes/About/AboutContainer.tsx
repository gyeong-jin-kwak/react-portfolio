import React from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../../reducers/rootReducer";
import AboutPresenter from "./AboutPresenter";

const AboutContainer = (): JSX.Element => {
	// eslint-disable-next-line
	const aboutData: any = useSelector(
		(state: RootReducerType) => state.aboutReducer
	);

	return <AboutPresenter result={aboutData.aboutInfo} />;
};

export default AboutContainer;
