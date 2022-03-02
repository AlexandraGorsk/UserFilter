import * as Statuses from '../statuses';
import {
	SET_USERS,
	SET_GENDER,
	SET_PAGE,
	SET_NAT,
	SET_RESULT,
	SET_USERS_REQUEST_STATUS_FAILURE,
	SET_USERS_REQUEST_STATUS_PENDING,
} from './users.actions';

export const defaultState = {
	usersRequestStatus: Statuses.UNCALLED,
	users: [],
	genger: 'male',
	page: 1,
	national: 'all',
	results: 10,
};
//page, gender, results, national
export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_USERS_REQUEST_STATUS_PENDING:
			return { ...state, usersRequestStatus: Statuses.PENDING };
		case SET_USERS:
			return {
				...state,
				users: action.payload,
				usersRequestStatus: Statuses.SUCCESS,
			};
		case SET_USERS_REQUEST_STATUS_FAILURE:
			return { ...state, usersRequestStatus: Statuses.FAILURE };
		case SET_GENDER:
			return {
				...state,
				gender: action.payload,
			};
		case SET_PAGE:
			return {
				...state,
				page: action.payload,
			};
		case SET_NAT:
			return {
				...state,
				national: action.payload,
			};
		case SET_RESULT:
			return {
				...state,
				results: action.payload,
			};
		default:
			return state;
	}
};
