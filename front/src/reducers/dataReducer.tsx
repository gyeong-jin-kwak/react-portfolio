import { RECEIVE_DATA, receiveData } from "../actions/index";

// 리덕스에 존재하는 메소드의 타입을 지정
type dataActionType = ReturnType<typeof receiveData>;

const initialState = {
	quote: "jesus",
};

// 작업 후 eslint 제거
// eslint-disable-next-line
export const dataReducer = (state = initialState, action: dataActionType) => {
	switch (action.type) {
		case RECEIVE_DATA:
			return action.data;
		default:
			return state;
	}
};
