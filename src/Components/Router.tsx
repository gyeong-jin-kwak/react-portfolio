import React from "react";

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Profile from "Routes/Profile";
import Projects from "Routes/Projects";
import ToyProjects from "Routes/ToyProjects";
import Contact from "Routes/Contact";
import Search from "Routes/Search";
import Header from "./Header";

const Routes: React.VFC = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/profile" component={Profile} />
				<Route path="/projects" component={Projects} />
				<Route path="/toyprojects" component={ToyProjects} />
				<Route path="/contact" component={Contact} />
				<Route path="/search" component={Search} />

				{/* 일치하는 경로가 없을 경우 '/' 경로로 이동 */}
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
};

export default Routes;
