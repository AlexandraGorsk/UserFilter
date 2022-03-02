import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReducer } from './users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	users: usersReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
