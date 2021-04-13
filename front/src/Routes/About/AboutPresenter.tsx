/* eslint-disable */
import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import { BREAK_POINT_MOBILE } from "Components/utilStyles";

const Profile = styled.div`
	margin-top: 3rem;
	padding: 0 1rem;
`;

const ProfileInfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	-webkit-box-align: center;

	img {
		display: block;
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
	}
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 0px;
	margin-top: 1rem;
	-webkit-box-pack: center;
`;

const ProfileInfoName = styled.strong`
	line-height: 1.5;
	font-weight: bold;
	color: rgb(33, 37, 41);
	font-size: 1.125rem;
`;

const ProfileInfoDesc = styled.div`
	margin-top: 0.5rem;
	letter-spacing: -0.004em;
	white-space: pre-wrap;
	line-height: 1.5;
	color: rgb(73, 80, 87);

	span,
	address {
		font-size: 0.8rem;
	}

	em {
		display: block;
		font-size: 0.9rem;
	}

	address {
		display: inline-block;
		margin-left: 1rem;
	}
`;

const ProfileLinkGroup = styled.div`
	display: flex;
	color: rgb(173, 181, 189);
`;

const ProfileLink = styled.a`
	display: block;
	width: 1.5rem;
	height: 1.5rem;

	& + a {
		margin-left: 1rem;
	}
`;

const AboutUnit = styled.div`
	position: static;
	display: grid;
	width: 100%;
	height: auto;
	padding: 0 1rem;
	min-height: auto;
	grid-template-rows: min-content min-content min-content min-content min-content 1fr;
	grid-template-columns: 100%;
	align-items: center;

	@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 50px;
	}
`;

const Title = styled.strong`
	display: block;
	margin: 35px 0 14px 0;
	color: #636161;
	font-size: 14px;
	overflow-wrap: break-word;
	text-align: start;

	@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
		padding-left: 1rem;
	}
`;

const InfoBox = styled.div`
	display: flex;
	width: 100%;
	margin: 0px 0px 15px;
	align-items: center;

	&:last-of-type {
		margin-bottom: 0;
	}

	em {
		display: block;
		width: 50%;
		font-size: 17px;
	}

	div {
		width: 50%;
		margin-top: 6px;
		margin-left: auto;
	}

	time,
	span {
		display: block;
		font-size: 10px;
		text-align: right;
		color: #666;
	}

	@media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
		padding: 12px 0;
		margin: 0px 0px 10px;

		&:last-of-type {
			margin-bottom: 10px;
		}
	}
`;

const AboutPresenter = ({ result }: any): JSX.Element => {
	return (
		<div className="container">
			<div className="content-wrap">
				<Profile>
					<ProfileInfoWrap>
						<img
							src="https://media.vlpt.us/images/gyeong-jin-kwak/profile/05ed685b-eff1-479c-868c-143b11351ad0/익명이.jpg"
							alt="곽경진 이미지"
						/>
						<ProfileInfo>
							<ProfileInfoName>
								{result.nameKorean} | {result.nameEnglish}
							</ProfileInfoName>
							<ProfileInfoDesc>
								<span>{result.birth}</span>
								<address>{result.address}</address>
								<em>
									{result.job[0]} && {result.job[1]}
								</em>
							</ProfileInfoDesc>
						</ProfileInfo>
					</ProfileInfoWrap>
					<span className="divider divider--thin" />
					<ProfileLinkGroup>
						{result.link.map((unit: any) => (
							<ProfileLink
								href={unit.categoryInfo.address}
								target="_blank"
								key={shortid.generate()}
							>
								<img
									src={require(`../../assets/${unit.category}.svg`)}
									alt={unit.category}
									className="about-link"
								/>
							</ProfileLink>
						))}
					</ProfileLinkGroup>
				</Profile>

				<span className="divider divider--thick" />

				<Title>Certificate /</Title>
				<AboutUnit>
					{result.certificate.map((unit: any) => (
						<InfoBox key={shortid.generate()}>
							<em>{unit.category}</em>
							<div>
								<span>{unit.categoryInfo.agency}</span>
								<time>{unit.categoryInfo.acquisitionDate}</time>
							</div>
						</InfoBox>
					))}
				</AboutUnit>

				<span className="divider divider--thick" />

				<Title>Education /</Title>
				<AboutUnit>
					{result.education.map((unit: any) => (
						<InfoBox key={shortid.generate()}>
							<em>{unit.name}</em>
							<div>
								<span>{unit.major}</span>
								<time>{unit.period}</time>
							</div>
						</InfoBox>
					))}
				</AboutUnit>

				<span className="divider divider--thick" />

				<Title>Career /</Title>
				<AboutUnit>
					{result.career.map((unit: any) => (
						<InfoBox key={shortid.generate()}>
							<em>{unit.name}</em>
							<div>
								<span>{unit.department}</span>
								<time>{unit.period}</time>
							</div>
						</InfoBox>
					))}
				</AboutUnit>
			</div>
		</div>
	);
};

export default AboutPresenter;
