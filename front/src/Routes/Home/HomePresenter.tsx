import React from "react";
import styled from "styled-components";
import shortid from "shortid";

interface Props {
	tagsKeys: Array<string>;
	tagsValues: Array<number>;
	result: any;
}

const TagGroup = styled.div`
	padding: 20px 0;
	background: yellow;
`;

const CardGroup = styled.div`
	background: blue;
`;

const HomePresenter = ({ tagsKeys, tagsValues, result }: Props) => {
	return (
		<div className="container container--home">
			<div className="content-wrap">
				<TagGroup>
					<ul>
						{console.log(result)}
						{tagsKeys.map((key) => (
							<li key={shortid.generate()}>
								<a href="www.naver.com">{key}</a>
								<span>()</span>
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
