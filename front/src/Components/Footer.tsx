import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import shortid from "shortid";
import { BREAK_POINT_PC } from "Components/utilStyles";
import { RootReducerType } from "../reducers/rootReducer";

interface Link {
	aboutInfo: {
		link: Array<{
			category: string;
			categoryInfo: {
				address: string;
			};
		}>;
	};
}

const FooterWrap = styled.footer`
	width: 100vw;
	background-color: rgb(241, 243, 245);
	padding: 0 1rem;
`;

const FooterInner = styled.div`
	display: flex;
	align-items: center;
	min-height: 150px;
	margin: 0 auto;

	@media only screen and (min-width: ${BREAK_POINT_PC}px) {
		max-width: 1024px;
	}
`;

const LinkGroup = styled.div`
	display: flex;
	margin-left: auto;
`;

const Link = styled.a`
	display: block;
	margin-left: 10px;
`;

export default function Footer(): JSX.Element {
	const aboutData: Link = useSelector(
		(state: RootReducerType) => state.aboutReducer
	);

	return (
		<FooterWrap>
			<FooterInner>
				<p>Copyright &copy; GyeongJinKwak All right reserved</p>
				<LinkGroup>
					{aboutData.aboutInfo.link.map((unit) => (
						<Link
							href={unit.categoryInfo.address}
							target="_blank"
							key={shortid.generate()}
						>
							<img
								src={require(`../assets/${unit.category}.svg`)}
								alt={unit.category}
								className="about-link"
							/>
						</Link>
					))}
				</LinkGroup>
			</FooterInner>
		</FooterWrap>
	);
}
