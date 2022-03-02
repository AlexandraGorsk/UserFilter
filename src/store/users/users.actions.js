import * as apiUsers from '../../api/getUsers';
export const SET_USERS_REQUEST_STATUS_PENDING =
	'SET_USERS_REQUEST_STATUS_PENDING';

export const SET_USERS_REQUEST_STATUS_FAILURE =
	'SET_USERS_REQUEST_STATUS_FAILURE';

export const SET_USERS = 'SET_USERS';
export const SET_GENDER = 'SET_GENDER';
export const SET_PAGE = 'SET_PAGE';
export const SET_NAT = 'SET_NAT';
export const SET_RESULT = 'SET_RESULT';
export const receiveUsers = (users) => ({
	type: SET_USERS,
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
export const setUsersRequestStatusPending = () => ({
	type: SET_USERS_REQUEST_STATUS_PENDING,
});

export const setUsersRequestSuccess = (posts) => ({
	type: SET_USERS,
	payload: posts,
});

export const setUsersRequestStatusFailure = () => ({
	type: SET_USERS_REQUEST_STATUS_FAILURE,
});
export const getUsers = ({ page, gender, results, national }) => {
	return (dispatch) => {
		dispatch(setUsersRequestStatusPending());

		apiUsers
			.getUsers({ page, gender, results, national })
			.then((users) => dispatch(setUsersRequestSuccess(users)))
			.catch(() => dispatch(setUsersRequestStatusFailure()));
	};
};
