import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const ProfileLink = styled(Link)`
	display: block;
	width: 1.5rem;
	height: 1.5rem;
	/* background-color: yellow; */

	& + a {
		margin-left: 1rem;
	}
`;

const AboutPresenter: React.VFC = () => {
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
							<ProfileInfoName>곽경진 | Gyeongjin Kwak</ProfileInfoName>
							<ProfileInfoDesc>
								<span>1991-12</span>
								<address>경기도 구시시 갈매동</address>
								<em>Frontend && Publisher</em>
							</ProfileInfoDesc>
						</ProfileInfo>
					</ProfileInfoWrap>
					<span className="divider divider--thin" />
					<ProfileLinkGroup>
						<ProfileLink to="a">
							<img
								src={require("../../assets/github.svg")}
								alt="github"
								className="about-link"
							/>
						</ProfileLink>
						<ProfileLink to="e">
							<img
								src={require("../../assets/tistory.svg")}
								alt="tistory"
								className="about-link"
							/>
						</ProfileLink>
						<ProfileLink to="c">
							<img
								src={require("../../assets/velog.svg")}
								alt="velog"
								className="about-link"
							/>
						</ProfileLink>
						<ProfileLink to="b">
							<img
								src={require("../../assets/mail.svg")}
								alt="mail"
								className="about-link"
							/>
						</ProfileLink>
						<ProfileLink to="d">
							<img
								src={require("../../assets/phone.svg")}
								alt="mail"
								className="about-link"
							/>
						</ProfileLink>
					</ProfileLinkGroup>
				</Profile>
				<span className="divider divider--thick" />
			</div>
		</div>
	);
};

export default AboutPresenter;
