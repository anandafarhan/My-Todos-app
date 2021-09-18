import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function Register({ navigation }) {
	return (
		<Box bg={'gray.100'} flex={1} justifyContent='center' px={6}>
			<CustomInput placeholder='Name' mb={5} />
			<CustomInput type='email' placeholder='Email' mb={5} />
			<CustomInput type='password' placeholder='Password' mb={5} />
			<CustomButton title='Register' mb={3} />
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text textAlign='center' color={'primary.500'}>
					Already have an account ?
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('DevMode')}>
				<Text textAlign='center' color={'danger.500'}>
					DevMode
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('BottomBar')}>
				<Text textAlign='center' color={'danger.500'}>
					Test
				</Text>
			</TouchableOpacity>
		</Box>
	);
}

export default Register;
