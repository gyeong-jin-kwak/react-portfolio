import React from "react";

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import About from "Routes/About";
import Projects from "Routes/Projects";
import ToyProjects from "Routes/Toy";
import Search from "Routes/Search";
import Header from "./Header";

function Routes(): JSX.Element {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/toyprojects" component={ToyProjects} />
				<Route path="/search" component={Search} />

				{/* 일치하는 경로가 없을 경우 '/' 경로로 이동 */}
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
}

export default Routes;
