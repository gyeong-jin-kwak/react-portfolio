import React from "react";
import { useSelector } from "react-redux";
import HomePresenter from "./HomePresenter";
import { RootReducerType } from "../../reducers/rootReducer";

interface Cards {
	workingCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
		participants: string;
		period: string;
		pages: string;
		link: string;
		items: Array<{
			title: string;
			content: string;
		}>;
	}>;

	toyCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
		participants: string;
		period: string;
		pages: string;
		link: string;
		items: Array<{
			title: string;
			content: string;
		}>;
	}>;
}

const HomeContainer: React.VFC = () => {
	const cardData: Cards = useSelector(
		(state: RootReducerType) => state.cardReducer
	);

	const totalTags: string[] = [];
	const result: any = {};

	cardData.workingCards.map((item) => totalTags.push(...item.tags));

	cardData.toyCards.map((item) => totalTags.push(...item.tags));

	totalTags.forEach((x) => {
		result[x] = (result[x] || 0) + 1;
	});

	const tagsKeys = Object.keys(result);

	return <HomePresenter tagsKeys={tagsKeys} result={result} />;
};

export default HomeContainer;
