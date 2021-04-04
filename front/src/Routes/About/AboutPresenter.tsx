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
							<svg
								width="25"
								height="25"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<mask
									id="github"
									width="25"
									height="25"
									x="0"
									y="0"
									maskUnits="userSpaceOnUse"
								>
									<path
										fill="#ffffff"
										fillRule="evenodd"
										d="M6.69 15.944c0 .08-.093.145-.21.145-.133.012-.226-.053-.226-.145 0-.081.093-.146.21-.146.12-.012.226.053.226.146zm-1.255-.182c-.028.08.053.173.174.198.105.04.226 0 .25-.081.024-.08-.053-.173-.174-.21-.104-.028-.221.012-.25.093zm1.783-.068c-.117.028-.198.104-.186.197.012.08.117.133.238.105.117-.028.198-.105.186-.186-.012-.076-.121-.129-.238-.116zM9.87.242C4.278.242 0 4.488 0 10.08c0 4.471 2.815 8.298 6.835 9.645.516.093.697-.226.697-.488 0-.25-.012-1.63-.012-2.476 0 0-2.822.605-3.415-1.202 0 0-.46-1.173-1.121-1.475 0 0-.924-.633.064-.621 0 0 1.004.08 1.557 1.04.883 1.557 2.363 1.109 2.94.843.092-.645.354-1.093.645-1.36-2.255-.25-4.529-.576-4.529-4.455 0-1.109.307-1.665.952-2.375-.105-.262-.448-1.342.105-2.738C5.56 4.157 7.5 5.51 7.5 5.51a9.474 9.474 0 0 1 2.532-.344c.86 0 1.726.117 2.533.343 0 0 1.939-1.355 2.782-1.089.552 1.4.21 2.476.105 2.738.645.714 1.04 1.27 1.04 2.375 0 3.891-2.375 4.202-4.63 4.456.372.319.686.923.686 1.87 0 1.36-.012 3.041-.012 3.372 0 .262.186.58.698.488C17.266 18.379 20 14.552 20 10.08 20 4.488 15.464.24 9.871.24zM3.919 14.149c-.052.04-.04.133.029.21.064.064.157.093.21.04.052-.04.04-.133-.029-.21-.064-.064-.157-.092-.21-.04zm-.435-.326c-.028.052.012.117.093.157.064.04.145.028.173-.028.028-.053-.012-.117-.093-.158-.08-.024-.145-.012-.173.029zm1.306 1.435c-.064.053-.04.174.053.25.092.093.21.105.262.04.052-.052.028-.173-.053-.25-.088-.092-.21-.104-.262-.04zm-.46-.593c-.064.04-.064.146 0 .238.065.093.174.133.226.093.065-.053.065-.157 0-.25-.056-.093-.16-.133-.225-.08z"
										clipRule="evenodd"
									/>
								</mask>
								<g mask="url(#github)">
									<path fill="currentColor" d="M0 0h20v20H0z" />
								</g>
							</svg>
						</ProfileLink>
						<ProfileLink to="e">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 459 459"
								fill="currentColor"
							>
								<title>티스토리 로고</title>
								<g>
									<path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
								</g>
							</svg>
						</ProfileLink>
						<ProfileLink to="c">
							<svg width="25" height="25" viewBox="0 0 192 192" fill="none">
								<rect width="192" height="192" fill="currentColor" rx="24" />
								<path
									d="M49 65.48V57.92C53.8 56.36 59.44 54.68 65.92 52.88C72.4 50.96 76.78 50 79.06 50C84.1 50 87.1 52.4 88.06 57.2L99.76 123.62C103.48 118.7 106.54 114.56 108.94 111.2C112.66 105.92 116.08 99.86 119.2 93.02C122.44 86.18 124.06 80.06 124.06 74.66C124.06 71.42 123.16 68.84 121.36 66.92C119.68 64.88 116.5 62.3 111.82 59.18C116.62 53.06 122.62 50 129.82 50C133.66 50 136.84 51.14 139.36 53.42C142 55.7 143.32 59.06 143.32 63.5C143.32 70.94 140.2 80.24 133.96 91.4C127.84 102.44 116.02 119.06 98.5 141.26L80.68 142.52L67 65.48H49Z"
									fill="white"
								/>
							</svg>
						</ProfileLink>
						<ProfileLink to="b">
							<svg
								width="25"
								height="25"
								fill="none"
								viewBox="0 0 32 32"
								data-testid="email"
							>
								<path
									fill="currentColor"
									d="M16 16.871L1.019 5H30.98L16 16.871zm0 3.146L1 8.131V27h30V8.131L16 20.017z"
								/>
							</svg>
						</ProfileLink>
						<ProfileLink to="d">
							<svg
								enableBackground="new 0 0 40 40"
								height="25"
								id="Layer_1"
								version="1.1"
								viewBox="0 0 40 40"
								width="25"
								xmlSpace="preserve"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<g>
									<g>
										<g>
											<g>
												<path
													d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18c-9.925,0-18-8.075-18-18S10.075,2,20,2 M20,0      C8.955,0,0,8.954,0,20c0,11.047,8.955,20,20,20c11.047,0,20-8.953,20-20C40,8.954,31.047,0,20,0L20,0z"
													fill="#959595"
												/>
											</g>
										</g>
									</g>
									<path
										clipRule="evenodd"
										d="M14.371,9.793c1.207-0.228,1.998,1.133,2.6,2.072   c0.586,0.912,1.307,1.982,1.016,3.169c-0.162,0.666-0.764,1.029-1.219,1.422c-0.449,0.388-1.133,0.744-1.299,1.34   c-0.271,0.967,0.322,1.982,0.689,2.56c0.834,1.306,1.842,2.483,3.129,3.534c0.623,0.51,1.488,1.191,2.355,1.016   c1.295-0.262,1.637-1.859,3.047-2.072c1.342-0.203,2.25,0.77,3.008,1.422c0.73,0.631,1.908,1.439,1.828,2.52   c-0.047,0.621-0.545,1.006-0.977,1.381c-0.439,0.383-0.824,0.813-1.258,1.096c-1.051,0.686-2.34,1.022-3.82,0.976   c-1.451-0.045-2.607-0.538-3.656-1.097c-2.051-1.094-3.672-2.633-5.199-4.348c-1.502-1.686-2.889-3.682-3.656-5.889   c-0.957-2.756-0.451-5.587,1.098-7.353c0.262-0.3,0.676-0.613,1.055-0.935C13.49,10.284,13.84,9.893,14.371,9.793z"
										fill="#959595"
										fillRule="evenodd"
									/>
								</g>
							</svg>
						</ProfileLink>
					</ProfileLinkGroup>
				</Profile>
				<span className="divider divider--thick" />
			</div>
		</div>
	);
};

export default AboutPresenter;
