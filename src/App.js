import { useEffect, useState } from 'react';
import { getUsers } from './api/getUsers';
import { CircularProgress } from '@mui/material';
import User from './containers/User';
import './App.css';
import FilterArea from './containers/FilterArea';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [filteredValue, setFilteredValue] = useState({
		gender: 'male',
		page: 1,
		results: 12,
		national: '',
	});
	const handleChangeGender = (value) => {
		setFilteredValue({ ...filteredValue, gender: value });
	};
	const handleChangeNat = (value) => {
		setFilteredValue({ ...filteredValue, national: value });
	};
	const handleChangeResults = (value) => {
		setFilteredValue({ ...filteredValue, results: value });
	};
	const handleChangePage = (value) => {
		setFilteredValue({ ...filteredValue, page: value });
	};

	useEffect(() => {
		setLoading(true);
		getUsers(filteredValue)
			.then((users) => setUsers(users))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, [filteredValue]);
	console.log(users);

	return (
		<Provider store={store}>
			<FilterArea
				filteredValue={filteredValue}
				onChangeGender={handleChangeGender}
				onChangeNationality={handleChangeNat}
				onChangeResults={handleChangeResults}
				onChangePage={handleChangePage}
			/>
			{loading && <CircularProgress />}
			{error && 'some error'}
			{!loading &&
				!error &&
				users &&
				users.map((user) => <User key={user.email} {...user} />)}
		</Provider>
	);
}

export default App;
