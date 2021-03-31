import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_DATA, receiveData } from "../actions/index";
import fetchData from "../api";

function* getApiData() {
	try {
		yield put(receiveData(yield call(fetchData)));
	} catch (err) {
		console.log(err);
	}
}

export default function* mySaga(): Generator {
	yield takeLatest(REQUEST_DATA, getApiData);
}
