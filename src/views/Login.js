import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function Login({ navigation }) {
	return (
		<Box bg={'gray.100'} flex={1} justifyContent='center' px={6}>
			<CustomInput type='email' placeholder='Email' mb={5} />
			<CustomInput type='password' placeholder='Password' mb={5} />
			<CustomButton title='Login' mb={3} />
			<TouchableOpacity onPress={() => navigation.navigate('Register')}>
				<Text textAlign='center' color={'primary.500'}>
					Don't have an account ?
				</Text>
			</TouchableOpacity>
		</Box>
	);
}

export default Login;
