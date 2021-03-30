import React from "react";
import ProjectCard from "Components/Card/index";

const ProjectsPresenter: React.VFC = () => {
	return (
		<div className="container container--card">
			<div className="content-wrap">
				<ProjectCard />
			</div>
		</div>
	);
};

export default ProjectsPresenter;