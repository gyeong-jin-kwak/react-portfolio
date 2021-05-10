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

	console.log(cardData);

	// const [loading, setLoading] = useState(null);
	// const [error, setError] = useState(null);

	return <HomePresenter />;
};

export default HomeContainer;
