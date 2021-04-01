import React from "react";
import CardPresenter from "./CardPresenter";

interface Card {
	id: string;
	category: string;
	src: string;
	title: string;
	content: string;
	tags: Array<string>;
}

const CardContainer = ({
	id,
	category,
	src,
	title,
	content,
	tags,
}: Card): JSX.Element => {
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
