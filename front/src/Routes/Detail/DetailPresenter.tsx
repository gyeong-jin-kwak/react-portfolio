import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { Link } from "react-router-dom";
import { BREAK_POINT_MOBILE, BREAK_POINT_TABLET } from "Components/utilStyles";

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
		margin-left: 25px;
	}
`;

const HeadTitle = styled.h1`
	margin-bottom: 20px;
	font-size: 25px;
`;

const ImgWrap = styled.div`
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		width: 50%;
	}

	img {
		width: 100%;
	}
`;

const TagsWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
	-webkit-overflow-scrolling: touch;
	margin-bottom: -0.875rem;

	&::-webkit-scrollbar {
		-webkit-appearance: none;
		height: 3px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: rgba(12, 166, 120, 0.185);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
	@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
		margin-bottom: 10px;
	}
`;

const HashTag = styled(Link)`
	display: inline-flex;
	flex: 0 0 auto;
	height: 1.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	margin-right: 0.5rem;
	margin-bottom: 0.6rem;
	border-radius: 0.75rem;
	-webkit-box-align: center;
	align-items: center;
	color: #36619e;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.75rem;
	background: rgb(241, 243, 245);
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
						<HeadTitle>{result.title}</HeadTitle>
						<TagsWrapper>
							{result.tags.map((tag) => (
								<HashTag key={shortid.generate()} to="/detail">
									{tag}
								</HashTag>
							))}
						</TagsWrapper>
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
