import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const UserCard = (user) => {
	const { picture, phone, name, email } = user;
	const { title, first, last } = name;
	const { t } = useTranslation();

	// i18n.changeLanguage('ru');
	// console.log(i18n.languages);

	return (
		<Card sx={{ minWidth: 350 }}>
			<CardMedia sx={{ width: 350 }} component='img' image={picture.large} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title} {first} {last}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{t('phone')}: {phone}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{t('email')}: {email}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{t('location')}: {email}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default UserCard;
