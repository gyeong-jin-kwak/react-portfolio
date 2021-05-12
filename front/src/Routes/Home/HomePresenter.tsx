import React from "react";
import styled from "styled-components";
import shortid from "shortid";

interface Props {
	tagsKeys: Array<string>;
	tagsValues: Array<number>;
}

const TagGroup = styled.div`
	padding: 20px 0;
	background: yellow;
`;

const CardGroup = styled.div`
	background: blue;
`;

const HomePresenter = ({ tagsKeys, tagsValues }: Props) => {
	return (
		<div className="container container--home">
			<div className="content-wrap">
				<TagGroup>
					<ul>
						{tagsKeys.map((key) => (
							<li key={shortid.generate()}>
								<a href="www.naver.com">{key}</a>
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
