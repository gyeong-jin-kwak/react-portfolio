import React from "react";
import { useSelector } from "react-redux";
import ProjectsPresenter from "./ProjectsPresenter";
import { RootReducerType } from "../../reducers/rootReducer";

interface WorkingCards {
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
}

const ProjectContainer: React.VFC = () => {
	const cardData: WorkingCards = useSelector(
		(state: RootReducerType) => state.cardReducer
	);

	return <ProjectsPresenter workingCards={cardData.workingCards} />;
};

export default ProjectContainer;
