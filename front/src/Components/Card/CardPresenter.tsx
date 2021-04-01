import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import shortid from "shortid";
import {
	BREAK_POINT_MOBILE,
	BREAK_POINT_TABLET,
	BREAK_POINT_PC,
} from "Components/utilStyles";

interface Props {
	id: string;
	category: string;
	src: string;
	title: string;
	content: string;
	tags: Array<string>;
}

const Card = styled.article`
	width: calc(100% - 2rem);
	background: #fff;
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
	transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
	margin: 1rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	& + & {
		margin-top: 1rem;
	}

	@media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
		width: calc(50% - 2rem);
	}
	@media only screen and (min-width: ${BREAK_POINT_PC}px) {
		width: 20rem;
	}
`;

const CardImg = styled.div`
	position: relative;
	width: 100%;
	padding-top: 52.1921%;

	img {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
`;

const CardImgLink = styled(Link)`
	display: block;
	color: inherit;
	text-decoration: none;
`;

const CardCategory = styled.span`
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
`;

const CardContent = styled.div`
	padding: 1rem;
	display: flex;
	flex: 1 1 0%;
	flex-direction: column;
`;

const CardDesc = styled.div`
	flex: 1 1 0%;
	p {
		margin: 0px 0px 1.5rem;
		word-break: break-word;
		overflow-wrap: break-word;
		font-size: 0.875rem;
		line-height: 1.5;
		height: 3.9375rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		color: rgb(73, 80, 87);
	}
`;

const CardDescLink = styled(Link)`
	display: block;
	color: inherit;
	text-decoration: none;

	strong {
		display: block;
		margin: 0px 0px 0.7rem;
		font-size: 1rem;
		line-height: 1.5;
		word-break: break-word;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: rgb(33, 37, 41);
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
		margin-bottom: -0.5rem;
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
	color: rgb(12, 166, 120);
	text-decoration: none;
	font-weight: 500;
	font-size: 0.75rem;
	background: rgb(241, 243, 245);
`;

function ProjectCard({
	id,
	category,
	src,
	title,
	content,
	tags,
}: Props): JSX.Element | null {
	return (
		<>
			<Card key={id}>
				{/* 카드이미지 */}
				<CardImgLink to="/detail">
					<CardImg>
						<CardCategory>
							{category === "working" ? "Working" : "Toy"}
						</CardCategory>
						<img src={src} alt={title} />
					</CardImg>
				</CardImgLink>

				{/* 카드컨텐츠 */}
				<CardContent>
					<CardDescLink to="/detail">
						<strong>{title}</strong>
						<CardDesc>
							<p>{content}</p>
						</CardDesc>
					</CardDescLink>
					<TagsWrapper>
						{tags.map((tag) => (
							<HashTag key={shortid.generate()} to="/detail">
								{tag}
							</HashTag>
						))}
					</TagsWrapper>
				</CardContent>
			</Card>
		</>
	);
}

export default ProjectCard;
