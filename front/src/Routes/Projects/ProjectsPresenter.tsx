import React from "react";
import ProjectCard from "Components/Card/index";

interface Props {
	workingCards: Array<{
		id: string;
		category: string;
		title: string;
		src: string;
		content: string;
		tags: Array<string>;
		period: string;
	}>;
}

const ProjectsPresenter = ({ workingCards }: Props): JSX.Element => {
	return (
		<div className="container container--card">
			<div className="content-wrap">
				{workingCards.map((card) => (
					<ProjectCard
						key={card.id}
						id={card.id}
						category={card.category}
						src={card.src}
						title={card.title}
						content={card.content}
						tags={card.tags}
						period={card.period}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsPresenter;
