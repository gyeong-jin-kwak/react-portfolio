import shortid from "shortid";
import faker from "faker";
import {
	LOAD_CARDS_REQUEST,
	LOAD_CARDS_SUCCESS,
	LOAD_CARDS_FAILURE,
	cardRequest,
	cardSuccess,
	cardFailure,
} from "../actions/card";

// 리덕스에 존재하는 메소드의 타입을 지정
type dataActionType =
	| ReturnType<typeof cardRequest>
	| ReturnType<typeof cardSuccess>
	| ReturnType<typeof cardFailure>;

const initialState = {
	projectCards: [
		{
			id: shortid.generate(),
			category: "toy",
			title: "SPA ToDoList",
			src:
				"https://img.animalplanet.co.kr/news/2019/11/04/700/80g5o10sbyai5zhj9n8k.jpg",
			content:
				"자바스크립트를 이용해서 SPA 구조의 ToDoList를 만들어보았습니다.",
			tags: ["Javascript", "CSS"],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "푸본 현대생명",
			src: "https://i.ytimg.com/vi/2-ViiUsW3XU/maxresdefault.jpg",
			content:
				"푸본 현대생명에서 3~4개월 동안 보험 관련 페이지를 만들었습니다.",
			tags: ["Javascript", "SCSS", "Git", "BEM"],
		},
		{
			id: shortid.generate(),
			category: "toy",
			title: "Next Node SNS",
			src: "https://newsimg.sedaily.com/2020/03/30/1Z0EEBLG9X_1.jpg",
			content:
				"넥스트, 스타일드 컴포넌트, 사가를 이용해서 노드 SNS를 만들어보았습니다. 더불어 Back도 함께 진행해보았으며 AWS에 배포 작업을 진행해보았습니다.",
			tags: ["Next", "Styled-Component", "Redux", "Saga"],
		},
	],
	workingCards: [
		{
			id: shortid.generate(),
			category: "working",
			title: "푸본 현대생명",
			src: faker.image.image(),
			content:
				"푸본 현대생명에서 3~4개월 동안 보험 관련 페이지를 만들었습니다.",
			tags: ["Javascript", "SCSS", "Git", "BEM"],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "포스코 MES 3.0 React Project",
			src: faker.image.image(),
			content: "약 1년 기간동안 리액트 프로젝트에 참여했습니다.",
			tags: ["React", "SCSS", "Git"],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "CJ BIO",
			src: faker.image.image(),
			content: "4개월 동안 프로젝트에 참여했습니다.",
			tags: ["SCSS", "Git"],
		},
	],
	toyCards: [
		{
			id: shortid.generate(),
			category: "toy",
			title: "SPA ToDoList",
			src:
				"https://img.animalplanet.co.kr/news/2019/11/04/700/80g5o10sbyai5zhj9n8k.jpg",
			content:
				"자바스크립트를 이용해서 SPA 구조의 ToDoList를 만들어보았습니다.",
			tags: ["Javascript", "CSS"],
		},
		{
			id: shortid.generate(),
			category: "toy",
			title: "Next Node SNS",
			src: "https://newsimg.sedaily.com/2020/03/30/1Z0EEBLG9X_1.jpg",
			content:
				"넥스트, 스타일드 컴포넌트, 사가를 이용해서 노드 SNS를 만들어보았습니다. 더불어 Back도 함께 진행해보았으며 AWS에 배포 작업을 진행해보았습니다.",
			tags: ["Next", "Styled-Component", "Redux", "Saga"],
		},
		{
			id: shortid.generate(),
			category: "toy",
			title: "ToDo Mini Trello",
			src: faker.image.image(),
			content: "SPA 구조의 Javascript를 통해서 Mini Trello를 구현해보았습니다.",
			tags: ["Javascript", "SCSS"],
		},
	],
};

// 작업 후 eslint 제거
// eslint-disable-next-line
export const cardReducer = (state = initialState, action: dataActionType) => {
	switch (action.type) {
		case LOAD_CARDS_REQUEST:
			return {};

		case LOAD_CARDS_SUCCESS:
			return {};

		case LOAD_CARDS_FAILURE:
			return {};
		default:
			return state;
	}
};
