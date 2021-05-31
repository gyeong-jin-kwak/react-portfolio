import React, { useCallback } from "react";
import styled from "styled-components";
import shortid from "shortid";

interface Props {
	tagsKeys: Array<string>;
	result: { [k: string]: number };
}

const TagGroup = styled.div`
	padding: 20px 0;
	background: #eee;

	ul {
		padding: 20px 0;
	}

	li {
		cursor: pointer;
	}

	a {
		display: inline-block;
		width: 100%;
		padding: 15px 20px;
		&:hover {
			background: #fff;
		}
	}
`;

const CardGroup = styled.div`
	background: blue;
`;

const HomePresenter = ({ tagsKeys, result }: Props): JSX.Element => {
	const onClickButton = () => {
		console.log("hi li");
	};

	return (
		<div className="container container--home">
			<div className="content-wrap">
				<TagGroup>
					<ul>
						{tagsKeys.map((key) => (
							<li key={shortid.generate()}>
								<a href="www.naver.com" onClick={onClickButton}>
									{key}
									<span> ({result[key]}) </span>
								</a>
							</li>
						))}
					</ul>
				</TagGroup>
				<CardGroup>
					<h1>Javascript</h1>
				</CardGroup>
			</div>
		</div>
	);
};

export default HomePresenter;
