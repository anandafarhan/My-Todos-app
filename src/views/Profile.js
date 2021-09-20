import { Avatar, Box, Text, useToast } from 'native-base';
import React, { useContext } from 'react';
import CustomButton from '../components/CustomButton';
import { setAuthToken } from '../config/server';
import { AppContext } from '../context/AppContext';

function Profile({ navigation }) {
	const toast = useToast();
	const [state, dispatch] = useContext(AppContext);
	function handleLogout() {
		dispatch({ type: 'LOGOUT' });
		setAuthToken(null);
		toast.show({ title: 'Logout Success' });
		navigation.navigate('Login');
	}
	return (
		<Box bg={'gray.200'} flex={1} justifyContent='center' px={6}>
			<Box bg='white' shadow={3} rounded='lg' p={4} maxHeight={200} mt={4}>
				<Box w='100%' justifyContent='center' alignItems='center'>
					<Avatar
						source={{
							uri: 'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
						}}
					>
						{state.user.name
							.split(' ')
							.map((item) => item.slice(0, 1))
							.join('')}
					</Avatar>
				</Box>
				<Box h='100%'>
					<Text fontSize='xl' color={'gray.600'} mt={6}>
						Name : {state.user.name}
					</Text>
					<Text fontSize='xl' color={'gray.600'} mt={5}>
						Email : {state.user.email}
					</Text>
				</Box>
			</Box>
			<CustomButton title='Logout' scheme='danger' mt={5} onPress={handleLogout} />
		</Box>
	);
}

export default Profile;
