import React from "react";
import CardPresenter from "./CardPresenter";

interface Card {
	id: string;
	category: string;
	src: string;
	title: string;
	content: string;
	tags: Array<string>;
	period: string;
}

const CardContainer = ({
	id,
	category,
	src,
	title,
	content,
	tags,
	period,
}: Card): JSX.Element => {
	return (
		<CardPresenter
			id={id}
			category={category}
			src={src}
			title={title}
			content={content}
			tags={tags}
			period={period}
		/>
	);
};

export default CardContainer;
