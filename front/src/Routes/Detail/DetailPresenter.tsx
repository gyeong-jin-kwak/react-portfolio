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
	margin: 20px 0 15px;
	font-size: 2rem;
	letter-spacing: 0.4px;
	word-break: keep-all;
	line-height: 1.8rem;
	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		margin-top: 0;
	}
`;

const ImgWrap = styled.div`
	position: relative;
	width: 100%;
	padding-top: 52.1921%;

	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		width: 50%;
	}

	img {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	span {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 5px 8px;
		color: #000;
		background-color: #fff;
		border-radius: 1rem;
		box-sizing: border-box;
		font-size: 12px;
		z-index: 1;
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
		margin-bottom: 30px;
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

const SubInfo = styled.div`
	strong,
	span {
		display: block;
	}

	ul li {
		margin-bottom: 1.5rem;
	}

	strong {
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: bold;
		color: #36619e;
	}

	span {
		font-size: 0.9rem;
	}

	a {
		text-decoration: underline;
		&:hover {
			color: #1494e9;
		}
	}
`;

const ProjectDesc = styled.div`
	margin-bottom: 1.5rem;

	strong {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: #36619e;
	}

	p {
		font-size: 1rem;
		line-height: 1.5rem;
	}
`;

const DetailPresenter = ({ result }: Props): JSX.Element => {
	return (
		<div className="container container--detail">
			<div className="content-wrap">
				<HeadWrap>
					<ImgWrap>
						<span>{result.category === "working" ? "Working" : "Toy"}</span>
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
						<ProjectDesc>
							<strong>This Project is..</strong>
							<p>{result.content}</p>
						</ProjectDesc>
						<SubInfo>
							<ul>
								<li>
									<strong>기간</strong>
									<span>{result.period}</span>
								</li>
								<li>
									<strong>인원</strong>
									<span>{result.participants}</span>
								</li>
								<li>
									<strong>참여 페이지</strong>
									<span>{result.pages}</span>
								</li>
								{result.link ? (
									<li>
										<strong>페이지 바로가기</strong>
										<span>
											<a href={result.link}>{result.link}</a>
										</span>
									</li>
								) : (
									""
								)}
							</ul>
						</SubInfo>
					</HeadContent>
				</HeadWrap>
			</div>
		</div>
	);
};

export default DetailPresenter;
