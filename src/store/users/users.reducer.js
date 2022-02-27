import {
	RECEIVE_USERS,
	SET_GENDER,
	SET_PAGE,
	SET_NAT,
	SET_RESULT,
} from './users.actions';

export const defaultState = {
	users: [],
	genger: 'male',
	page: 1,
	national: 'all',
	results: 10,
};
export const usersReduser = (state = defaultState, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_GENDER:
			return {
				...state,
				filterStatus: action.payload,
			};
		case SET_PAGE:
			return {
				...state,
				filterValue: action.payload,
			};
		case SET_NAT:
			return {
				...state,
				filterValue: action.payload,
			};
		case SET_RESULT:
			return {
				...state,
				filterValue: action.payload,
			};
		default:
			return state;
	}
};
