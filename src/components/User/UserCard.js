import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const UserCard = (user) => {
	const { picture, phone, name, email } = user;
	const { title, first, last } = name;
	return (
		<Card sx={{ minWidth: 350 }}>
			<CardMedia sx={{ width: 350 }} component='img' image={picture.large} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title} {first} {last}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Phone: {phone}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Email: {email}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Location: {email}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default UserCard;
