// store.ts
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
