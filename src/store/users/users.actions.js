import * as apiUsers from '../../api/getUsers';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_GENDER = 'SET_GENDER';
export const SET_PAGE = 'SET_PAGE';
export const SET_NAT = 'SET_NAT';
export const SET_RESULT = 'SET_RESULT';
export const receiveUsers = (users) => ({
	type: RECEIVE_USERS,
	payload: users,
});
export const setNat = (value) => ({
	type: SET_NAT,
	payload: value,
});
export const setGender = (value) => ({
	type: SET_GENDER,
	payload: value,
});
export const setPage = (value) => ({
	type: SET_PAGE,
	payload: value,
});
export const setResult = (value) => ({
	type: SET_RESULT,
	payload: value,
});
export const getUsers = (users) => {
	return (dispatch) => {
		apiUsers.getUsers(users).then(() => dispatch(receiveUsers(users)));
	};
};
