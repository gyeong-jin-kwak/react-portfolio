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
	workingCards: [
		{
			id: shortid.generate(),
			category: "working",
			title: "포스타입 홈 메인 페이지 리뉴얼",
			src: faker.image.image(),
			content:
				"작가와 팬이 소통하는 창작 콘텐츠 오픈 플랫폼 포스타입 반응현 메인 페이지 개편, 포스타입 이메일 개편 및 ONLY전 구축",
			tags: ["Javascript", "jQuery", "CSS", "Git"],
			participants: "퍼블리셔 1명 (본인)",
			period: "‘20.09 ~ ‘20.11 (3개월)",
			pages:
				"메인 페이지(mobile, tablet, pc), 메일 개편, 온리전 메인 페이지, 상세 페이지",
			link: "https://www.postype.com",
			items: [
				{
					title: "반응형 페이지 구현",
					content:
						"사용 미디어 쿼리를 사용한 모바일, 타블릿, 데스크탑 해상도의 반응형 페이지 제작",
				},
				{
					title: "Slick 슬라이드 구현",
					content:
						"기존 포스타입이 이용하는 플러그인 slick을 사용한 슬라이드 구현 및 slick의 기존 기능을 customizing 하여 현재 슬라이드 페이지 indicator 표현 및 tab 기능과 함께 구현",
				},
				{
					title: "Git 커미션 기반의 Git 협업",
					content: "Git  커미선 feature, bugfix를 기반으로 Git을 사용한 협업",
				},
			],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "보험 푸본 현대생명 홈페이지 리뉴얼",
			src: faker.image.image(),
			content:
				"보험 회사인 푸본 현대생명의 기존 mobile과 pc 페이지를 리뉴얼 페이지 약 400-500 페이지로 구성",
			tags: ["Javascript", "SCSS", "Git SVN", "BEM"],
			participants: "퍼블리셔 5명 (본인포함)",
			period: "‘20.04 ~ ‘20.07 (4개월)",
			pages: "보험상품, 금융상품, 윤리경영, 퇴직연금 일부",
			link: "https://www.fubonhyundai.com/",
			items: [
				{
					title: "BEM class Naming 사용",
					content:
						"개발, 디버깅, 유지보수를 위하여 css 선택자 이름을 가능한 명확하게 만들기 위한 BEM(Block, Element, Modifier) 방식을 이용한 class naming 사용",
				},
				{
					title: "휴고(hugo) shortcode",
					content: "휴고(hugo) 문법으로 아코디언, 탭 요소 마크업(공통)",
				},
				{
					title: "Flex 구현",
					content: "flex 문법을 사용한 레이아웃 정렬",
				},
				{
					title: "Git svn, Filezilla 사용",
					content:
						"Git svn을 사용해서 작업물 형상 관 리 및 FileZilla를 이용해서 기획, 개 발 팀이 작업을 볼 수 있도록 사이트 배포 담당",
				},
			],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "CJ Bio 웹사이트 구축",
			src: faker.image.image(),
			content:
				"CJ제일제당에서 그린 바이오 사업을 소개하는 공식 홈페이지 개설 (pc, mobile) 약 50 ~ 80 페이지로 구성 (영문), 영문 외 중문, 국문 페이지 추가 시 페이지 수 x3 추가",
			tags: ["jQuery", "SCSS", "Git"],
			participants: "퍼블리셔 4명 (본인포함)",
			period: "‘20.02 ~ ‘20.03 (1개월)",
			pages:
				"Nucleotides, Improber, 기술 소개 외 다수 페이지 제작 및 한, 영, 중 문 변환, 메일 페이지",
			link: "https://www.cjbio.net/",
			items: [
				{
					title: "Animation 구현",
					content:
						"Keyframes와 transition-delay 등을 이용한 animation 애니메이션 구현",
				},
				{
					title: "Node.js - Gulp",
					content:
						"Node.js를 기반으로 한 Gulp 문법 을 사용해서 header, footer 파일 을 Include 관리",
				},
				{
					title: "Git",
					content: "Git을 사용해서 팀원들과 작업 파일 형상관리",
				},
			],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "포스코 무역통상시스템 UI 개발",
			src: faker.image.image(),
			content:
				"포스코 무역통상 부서 직원들이 사용하는 페이지 UI제작 1680 *680 사이즈로 작업자의 노트북에서 사용하는 사이즈로 제작 33페이지로 구성",
			tags: ["jQuery", "SCSS", "Git"],
			participants: "퍼블리셔 1명 (본인)",
			period: "‘19.11 ~ ‘19.12 (2개월)",
			pages: "모든 페이지",
			items: [
				{
					title: "jQuery chart.js",
					content: "jQuery chart.js 플러그인을 사용해서 chart를 구현",
				},
				{
					title: "jQuery datepicker",
					content: "jQuery datepicker을 사용해서 달력 UI를 구현",
				},
				{
					title: "iFrame 사용",
					content:
						"고객사와 개발팀 요청으로 iFrame 을 사용해서 다른 페이지를 불러오는 작업 진행",
				},
			],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "포스코 차세대 MES 3.0 시스템 UI개선",
			src: faker.image.image(),
			content:
				"포스코 직원들이 업무에 사용하는 MES 2.0 버전 페이지를 3.0버전으로 리액트를 사용해서 업그레이드 하는 대규모 프로젝트였으며 개발되어진 컴포넌트를 각 파트에 맞는 페이지로 커스터마이징 하는 작업을 담당",
			tags: ["React", "SCSS", "Git"],
			participants: "퍼블리셔 약 16명 이상 (본인 포함)",
			period: "‘19.01~ ‘19.11 (11개월)",
			pages: "물류, 선강, 연주파트 일원",
			items: [
				{
					title: "React Component",
					content:
						"공통으로 개발된 리액트 컴포넌트 를 각 파트에 맞게 표, 차트 등을 커스 터마이징 해서 화면 제작",
				},
				{
					title: "데이터그리드 사용",
					content:
						"데이터그리드 컴포넌트를 사용해서 임직원 업무에 사용되는 표와 차트 제작",
				},
				{
					title: "Git 사용",
					content:
						"Git으로 각자의 브랜치를 만들어서 add, commit, merge, push로 작업 형상관리",
				},
			],
		},
		{
			id: shortid.generate(),
			category: "working",
			title: "포스코 SWP 유지보수",
			src: faker.image.image(),
			content:
				"임직원 소통 및 정보공유 포탈 페이지 레이아웃 변경, 배너 수정, 마크업변경등의페이지 ui 개선/이클립스로형상관리",
			tags: ["CSS"],
			participants: "퍼블리셔 1명 (본인)",
			period: "‘19.01~ ‘19.11 (11개월)",
			pages: "수정요청이있는‘포스코투데이‘모든페이지유지ᆞ보수",
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
