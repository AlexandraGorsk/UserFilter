import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReduser } from './users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	users: usersReduser,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
