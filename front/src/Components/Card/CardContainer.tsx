import React from "react";
import { useSelector } from "react-redux";
import CardPresenter from "./CardPresenter";
import { RootReducerType } from "../../reducers/rootReducer";

interface cards {
	projectCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
	}>;
}

const CardContainer: React.VFC = () => {
	const cardData: cards = useSelector(
		(state: RootReducerType) => state.cardReducer
	);
	// console.log(cardData.projectCards);

	return <CardPresenter cards={cardData.projectCards} />;
};

export default CardContainer;
