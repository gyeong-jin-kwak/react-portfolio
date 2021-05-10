import React from "react";
import styled from "styled-components";

const TagGroup = styled.div`
	padding: 20px 0;
	background: yellow;
`;

const CardGroup = styled.div`
	background: blue;
`;

const HomePresenter: React.VFC = () => {
	return (
		<div className="container container--home">
			<div className="content-wrap">
				<TagGroup>
					<ul>
						<li>
							<a href="www.naver.com">태그1</a>
						</li>
						<li>
							<a href="www.naver.com">태그2</a>
						</li>
						<li>
							<a href="www.naver.com">태그3</a>
						</li>
						<li>
							<a href="www.naver.com">태그4</a>
						</li>
					</ul>
				</TagGroup>
				<CardGroup>카드들이 들어갈 자리</CardGroup>
			</div>
		</div>
	);
};

export default HomePresenter;
