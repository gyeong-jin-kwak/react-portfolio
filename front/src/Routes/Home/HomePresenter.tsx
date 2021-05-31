import React from "react";
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
		padding: 20px;
	}

	li {
		padding: 15px 0;
		cursor: pointer;
		&:hover {
			background: #fff;
		}
	}
`;

const CardGroup = styled.div`
	background: blue;
`;

const HomePresenter = ({ tagsKeys, result }: Props): JSX.Element => {
	return (
		<div className="container container--home">
			<div className="content-wrap">
				<TagGroup>
					<ul>
						{tagsKeys.map((key) => (
							<li key={shortid.generate()}>
								<a href="www.naver.com">{key}</a>
								<span>({result[key]})</span>
							</li>
						))}
					</ul>
				</TagGroup>
				<CardGroup>카드들이 들어갈 자리</CardGroup>
			</div>
		</div>
	);
};

export default HomePresenter;
