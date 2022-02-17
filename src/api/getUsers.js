import axios from 'axios';
export const getUsers = async ({ page, gender, results, national }) => {
	const { data } = await axios.get(
		`https://randomuser.me/api/?results=${results}&page=${page}&nat=${national}&gender=${gender}`
	);
	return data.results;
};
