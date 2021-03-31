import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

export const rootReducer = combineReducers({
	dataReducer,
});

// Typescript
export type RootReducerType = ReturnType<typeof rootReducer>;
