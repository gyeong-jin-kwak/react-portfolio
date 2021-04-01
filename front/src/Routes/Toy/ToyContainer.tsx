import React from "react";
import { useSelector } from "react-redux";
import ToyPresenter from "./ToyPresenter";
import { RootReducerType } from "../../reducers/rootReducer";

interface ToyCards {
	toyCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
	}>;
}

const ToyContainer: React.VFC = () => {
	const cardData: ToyCards = useSelector(
		(state: RootReducerType) => state.cardReducer
	);

	return <ToyPresenter toyCards={cardData.toyCards} />;
};

export default ToyContainer;
