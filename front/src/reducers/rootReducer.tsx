import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { cardReducer } from "./card";
import { aboutReducer } from "./about";

export const rootReducer = combineReducers({
	dataReducer,
	cardReducer,
	aboutReducer,
});

// Typescript
export type RootReducerType = ReturnType<typeof rootReducer>;
