import React, { useReducer } from 'react';
import {
	Dialog,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography,
} from '@mui/material';
import UserCard from '../../components/User/UserCard';

const User = (user, onClick) => {
	const { name, phone, picture } = user;
	const { title, first, last } = name;

	const [open, toggle] = useReducer((prev) => !prev, false);
	return (
		<div>
			<ListItem alignItems='flex-start' onClick={toggle} button>
				<ListItemAvatar>
					<Avatar alt='Photo' src={picture.large} />
				</ListItemAvatar>
				<ListItemText
					primary={
						<Typography>
							{title} {first} {last}
						</Typography>
					}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component='span'
								variant='body2'
								color='text.primary'
							>
								{phone}
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>

			<Dialog open={open} onClose={toggle}>
				<UserCard {...user} />
			</Dialog>
			<Divider variant='inset' />
		</div>
	);
};

export default User;
