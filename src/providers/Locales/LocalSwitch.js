import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Switch, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 28,
	height: 16,
	padding: 0,
	display: 'flex',
	'&:active': {
		'& .MuiSwitch-thumb': {
			width: 15,
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		padding: 2,
		'&.Mui-checked': {
			transform: 'translateX(12px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: 12,
		height: 12,
		borderRadius: 6,
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === 'dark'
				? 'rgba(255,255,255,.35)'
				: 'rgba(0,0,0,.25)',
		boxSizing: 'border-box',
	},
}));
export default function LocalSwitch() {
	const { i18n } = useTranslation();
	const handleChangeLang = () => {
		if (i18next.language === 'ru') {
			i18n.changeLanguage('en');
		} else {
			i18n.changeLanguage('ru');
		}
	};
	return (
		<Stack direction='row' spacing={1} alignItems='center'>
			<Typography>RU</Typography>
			<AntSwitch
				onChange={handleChangeLang}
				checked={i18next.language === 'en'}
				inputProps={{ 'aria-label': 'ant design' }}
			/>
			<Typography>EN</Typography>
		</Stack>
	);
}
