import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { BREAK_POINT_TABLET } from "Components/utilStyles";

interface Props {
	result: {
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
	};
}

const HeadWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 20px;

	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		flex-direction: row;
		margin: 2rem 0;
	}
`;

const HeadContent = styled.div`
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		width: 50%;
	}
`;

const ImgWrap = styled.div`
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		width: 50%;
	}

	img {
		width: 100%;
	}
`;

const DetailPresenter = ({ result }: Props): JSX.Element => {
	return (
		<div className="container container--detail">
			<div className="content-wrap">
				<HeadWrap>
					<ImgWrap>
						<img src={result.src} alt={result.title} />
					</ImgWrap>
					<HeadContent>
						<span>{result.title}</span>
						<span>{result.category}</span>
						<span>{result.content}</span>
						<span>
							{result.tags.map((tag) => (
								<span key={shortid.generate()}>{tag}</span>
							))}
						</span>
					</HeadContent>
				</HeadWrap>
			</div>
		</div>
	);
};

export default DetailPresenter;
