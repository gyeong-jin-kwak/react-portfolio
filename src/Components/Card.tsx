import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
	BREAK_POINT_MOBILE,
	BREAK_POINT_TABLET,
	BREAK_POINT_PC,
} from "Components/utilStyles";

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
		font-size: 1rem;
		margin: 0px 0px 0.25rem;
		line-height: 1.5;
		word-break: break-word;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: rgb(33, 37, 41);
	}
`;

const TagsWrapper = styled.div`
	margin-bottom: -0.875rem;
	@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
		margin-bottom: -0.5rem;
	}
`;

const HashTag = styled(Link)`
	margin-bottom: 0.875rem;
	background: rgb(241, 243, 245);
	padding-left: 1rem;
	padding-right: 1rem;
	height: 2rem;
	border-radius: 1rem;
	display: inline-flex;
	-webkit-box-align: center;
	align-items: center;
	margin-right: 0.875rem;
	color: rgb(12, 166, 120);
	text-decoration: none;
	font-weight: 500;
	font-size: 1rem;
	@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
		height: 1.5rem;
		font-size: 0.75rem;
		border-radius: 0.75rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
`;

function ProjectCard(): JSX.Element | null {
	return (
		<>
			<Card>
				{/* 카드이미지 */}
				<CardImgLink to="/detail">
					<CardImg>
						<img
							src="https://img.animalplanet.co.kr/news/2019/11/04/700/80g5o10sbyai5zhj9n8k.jpg"
							alt=""
						/>
					</CardImg>
				</CardImgLink>

				{/* 카드컨텐츠 */}
				<CardContent>
					<CardDescLink to="/detail">
						<strong>카드제목</strong>
						<CardDesc>
							<p>이러이러한 프로젝트를 했다.</p>
						</CardDesc>
					</CardDescLink>
					<TagsWrapper>
						<HashTag to="/detail">React</HashTag>
						<HashTag to="/detail">Typescript</HashTag>
					</TagsWrapper>
				</CardContent>
			</Card>

			<Card>
				{/* 카드이미지 */}
				<CardImgLink to="/detail">
					<CardImg>
						<img
							src="https://img.animalplanet.co.kr/news/2019/11/04/700/80g5o10sbyai5zhj9n8k.jpg"
							alt=""
						/>
					</CardImg>
				</CardImgLink>

				{/* 카드컨텐츠 */}
				<CardContent>
					<CardDescLink to="/detail">
						<strong>카드제목</strong>
						<CardDesc>
							<p>이러이러한 프로젝트를 했다.</p>
						</CardDesc>
					</CardDescLink>
					<TagsWrapper>
						<HashTag to="/detail">React</HashTag>
						<HashTag to="/detail">Typescript</HashTag>
					</TagsWrapper>
				</CardContent>
			</Card>

			<Card>
				{/* 카드이미지 */}
				<CardImgLink to="/detail">
					<CardImg>
						<img
							src="https://img.animalplanet.co.kr/news/2019/11/04/700/80g5o10sbyai5zhj9n8k.jpg"
							alt=""
						/>
					</CardImg>
				</CardImgLink>

				{/* 카드컨텐츠 */}
				<CardContent>
					<CardDescLink to="/detail">
						<strong>카드제목</strong>
						<CardDesc>
							<p>이러이러한 프로젝트를 했다.</p>
						</CardDesc>
					</CardDescLink>
					<TagsWrapper>
						<HashTag to="/detail">React</HashTag>
						<HashTag to="/detail">Typescript</HashTag>
					</TagsWrapper>
				</CardContent>
			</Card>
		</>
	);
}

export default ProjectCard;
