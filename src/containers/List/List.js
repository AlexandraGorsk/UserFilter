import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSlice, getUsers } from '../../store/users';
import * as Statuses from '../../store/statuses';
import User from '../User';

const List = () => {
	const { users, gender, page, results, national, usersRequestStatus } =
		useSelector(getSlice);
	console.log(gender);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers({ gender, page, results, national }));
	}, [gender, page, results, national, dispatch]);
	const loading = usersRequestStatus === Statuses.PENDING;

	const error = usersRequestStatus === Statuses.FAILURE;
	return (
		<>
			{loading && <CircularProgress />}
			{error && 'some error...'}
			{!loading &&
				!error &&
				users &&
				users?.map((user) => <User key={user.email} {...user} />)}
		</>
	);
};

export default List;
