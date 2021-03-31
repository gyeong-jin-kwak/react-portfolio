import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { cardReducer } from "./card";

export const rootReducer = combineReducers({
	dataReducer,
	cardReducer,
});

// Typescript
export type RootReducerType = ReturnType<typeof rootReducer>;
