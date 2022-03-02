import React from 'react';
import {
	Stack,
	Divider,
	Pagination,
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	ToggleButtonGroup,
	ToggleButton,
	Typography,
} from '@mui/material';
import LocalSwitch from '../../providers/Locales/LocalSwitch';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSlice,
	setGender,
	setNat,
	setPage,
	setResult,
} from '../../store/users';
const FilterArea = () => {
	const dispatch = useDispatch();
	const { gender, page, results, national } = useSelector(getSlice);
	//page, gender, results, national
	const nationality = [
		'AU',
		'BR',
		'CA',
		'CH',
		'DE',
		'DK',
		'ES',
		'FI',
		'FR',
		'GB',
		'IE',
		'IR',
		'NO',
		'NL',
		'NZ',
		'TR',
		'US',
	];
	const handleChangeGender = (e) => {
		const value = e.currentTarget.value;
		dispatch(setGender(value));
	};
	const handleChangeNationality = (e) => {
		const value = e.target.value;
		dispatch(setNat(value));
	};
	const handleChangeResults = (e) => {
		const value = e.target.value;
		dispatch(setResult(value));
	};
	const handleChangePage = (e, value) => {
		setPage(value);
		dispatch(setResult(value));
	};
	console.log(national, gender);
	const { t } = useTranslation();
	return (
		<>
			<Stack
				direction='row'
				sx={{ justifyContent: 'space-between', padding: 1 }}
			>
				<div>
					<Typography>
						{t('gender')}:{gender === 'male' ? t('male') : t('female')}
					</Typography>
					<ToggleButtonGroup size='small' variant='contained' value={gender}>
						<ToggleButton value='male' onClick={handleChangeGender}>
							<MaleIcon />
						</ToggleButton>
						<ToggleButton value='female' onClick={handleChangeGender}>
							<FemaleIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</div>
				<div>
					<Stack>
						<Typography>
							{t('page')}: {page}
						</Typography>
						<Pagination count={10} onChange={handleChangePage} page={page} />
					</Stack>
				</div>
				<FormControl sx={{ width: 200 }}>
					<InputLabel id='demo-simple-select-label'>{t('results')}</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={results}
						label='Results'
						onChange={handleChangeResults}
					>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={12}>12</MenuItem>
						<MenuItem value={16}>16</MenuItem>
						<MenuItem value={20}>20</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{ width: 200 }}>
					<InputLabel id='demo-simple-select-label'>
						{t('nationality')}
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						label='Nationality'
						value={national}
						onChange={handleChangeNationality}
					>
						{nationality.map((item) => (
							<MenuItem value={item} key={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Stack column>
					<LocalSwitch />
				</Stack>
			</Stack>

			<Divider />
		</>
	);
};

export default FilterArea;
