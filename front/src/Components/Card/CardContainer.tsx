import React from "react";
import { useSelector } from "react-redux";
import CardPresenter from "./CardPresenter";
import { RootReducerType } from "../../reducers/rootReducer";

// interface cards {
// 	projectCards: Array<{
// 		id: string;
// 		category: string;
// 		title: string;
// 		src: string;
// 		content: string;
// 		tags: Array<string>;
// 	}>;
// }

interface Card {
	id: string;
	category: string;
	src: string;
	title: string;
	content: string;
	tags: Array<string>;
}

const CardContainer = ({ id, category, src, title, content, tags }: Card) => {
	const cardData = useSelector((state: RootReducerType) => state.cardReducer);
	// console.log(cardData.projectCards);

	return (
		<CardPresenter
			id={id}
			category={category}
			src={src}
			title={title}
			content={content}
			tags={tags}
		/>
	);
};

export default CardContainer;
