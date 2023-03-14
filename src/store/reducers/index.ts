import { combineReducers } from "redux";
import { burgerReducer } from "./burgerReducer";

export const rootReducer = combineReducers({
    burger: burgerReducer,
})

export type RootState = ReturnType<typeof rootReducer>