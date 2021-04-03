import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailPresenter from "./DetailPresenter";
import { RootReducerType } from "../../reducers/rootReducer";

interface Props {
	match: {
		params: {
			id: string;
		};
	};
}

interface Cards {
	workingCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
	}>;

	toyCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
	}>;
}

const DetailContainer = ({
	match: {
		params: { id },
	},
}: Props): JSX.Element => {
	const [result, setResult] = useState({
		id: "",
		category: "",
		title: "",
		src: "",
		content: "",
		tags: [""],
	});

	const cardData: Cards = useSelector(
		(state: RootReducerType) => state.cardReducer
	);

	const projectCards = cardData.workingCards.concat(cardData.toyCards);

	useEffect(() => {
		const fetchData = () => {
			const targetID = id;
			const targetIndex = projectCards.findIndex((el) => el.id === targetID);
			const targetItem = projectCards[targetIndex];
			const nextItem = { ...result, ...targetItem };
			setResult(nextItem);
			// console.log(nextItem);
			// console.log(result);

			return <DetailPresenter result={result} />;
		};
		fetchData();
	}, []);
	// console.log(result);

	return <DetailPresenter result={result} />;
};

export default DetailContainer;
