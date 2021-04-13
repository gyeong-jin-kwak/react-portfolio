import {
	LOAD_ABOUT_REQUEST,
	LOAD_ABOUT_SUCCESS,
	LOAD_ABOUT_FAILURE,
	aboutRequest,
	aboutSuccess,
	aboutFailure,
} from "../actions/about";

// 리덕스에 존재하는 메소드의 타입을 지정
type dataActionType =
	| ReturnType<typeof aboutRequest>
	| ReturnType<typeof aboutSuccess>
	| ReturnType<typeof aboutFailure>;

const initialState = {
	aboutInfo: {
		nameKorean: "곽경진",
		nameEnglish: "GyeongJin Kwak",
		aboutPhoto:
			"https://media.vlpt.us/images/gyeong-jin-kwak/profile/05ed685b-eff1-479c-868c-143b11351ad0/익명이.jpg",
		job: ["Frontend", "Publisher"],
		birth: "1991-12",
		address: "경기도 구리시 갈매동",
		link: [
			{
				category: "github",
				categoryInfo: {
					address: "https://github.com/gyeong-jin-kwak",
				},
			},
			{
				category: "tistory",
				categoryInfo: {
					address:
						"https://worker-k.tistory.com/category/%EC%97%85%EB%AC%B4%EC%9D%B4%EC%95%BC%EA%B8%B0",
				},
			},
			{
				category: "velog",
				categoryInfo: {
					address: "https://velog.io/@gyeong-jin-kwak",
				},
			},
			{
				category: "mail",
				categoryInfo: {
					address: "mailto:kgj1352@naver.com",
				},
			},
			{
				category: "phone",
				categoryInfo: {
					address: "tel:010-6737-1352",
				},
			},
		],
		certificate: [
			{
				category: "정보처리기사",
				categoryInfo: {
					acquisitionDate: "2019/11/22",
					agency: "한국산업인력공단",
				},
			},
			{
				category: "웹디자인기능사",
				categoryInfo: {
					acquisitionDate: "2018/12/14",
					agency: "한국산업인력공단",
				},
			},
			{
				category: "컴퓨터 활용능력 2급",
				categoryInfo: {
					acquisitionDate: "2015/8/28",
					agency: "한국산업인력공단",
				},
			},
		],
		education: [
			{
				name: "성신여자대학교",
				period: "2012/03 - 2017/02",
				major: "서양화과",
			},
			{
				name: "혜성여자고등학교",
				period: "2007/3 - 2010/2",
				major: "문과계열",
			},
		],
		career: [
			{
				name: "인픽스",
				period: "2018/07 - 2020/08",
				department: "FDG",
			},
		],
	},
};

// 작업 후 eslint 제거
// eslint-disable-next-line
export const aboutReducer = (state = initialState, action: dataActionType) => {
	switch (action.type) {
		case LOAD_ABOUT_REQUEST:
			return {};

		case LOAD_ABOUT_SUCCESS:
			return {};

		case LOAD_ABOUT_FAILURE:
			return {};
		default:
			return state;
	}
};
