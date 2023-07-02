import { combineReducers } from "redux";
import authReducer from "./authReducer";
import questionsReducer from "./questionsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    questions: questionsReducer,
});

export default rootReducer;
