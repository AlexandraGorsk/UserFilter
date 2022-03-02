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
const FilterArea = ({
	filteredValue,
	onChangeGender,
	onChangeNationality,
	onChangeResults,
	onChangePage,
}) => {
	const national = [
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
		onChangeGender(value);
	};
	const handleChangeNationality = (e) => {
		const value = e.target.value;
		onChangeNationality(value);
	};
	const handleChangeResults = (e) => {
		const value = e.target.value;
		onChangeResults(value);
	};
	const handleChangePage = (e, value) => {
		onChangePage(value);
	};
	const { t } = useTranslation();
	console.log(filteredValue);
	return (
		<>
			<Stack
				direction='row'
				sx={{ justifyContent: 'space-between', padding: 1 }}
			>
				<div>
					<Typography>
						{t('gender')}:
						{filteredValue.gender === 'male' ? t('male') : t('female')}
					</Typography>
					<ToggleButtonGroup
						size='small'
						variant='contained'
						value={filteredValue.gender}
					>
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
							{t('page')}: {filteredValue.page}
						</Typography>
						<Pagination
							count={10}
							onChange={handleChangePage}
							page={filteredValue.page}
						/>
					</Stack>
				</div>
				<FormControl sx={{ width: 200 }}>
					<InputLabel id='demo-simple-select-label'>{t('results')}</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={filteredValue.results}
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
						value={filteredValue.national}
						onChange={handleChangeNationality}
					>
						{national.map((item) => (
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
