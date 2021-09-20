import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text, useToast } from 'native-base';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { loginUser } from '../config/server';
import { AppContext } from '../context/AppContext';

function Login({ navigation }) {
	const toast = useToast();
	const [state, dispatch] = useContext(AppContext);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	async function handleLogin() {
		const response = await loginUser(formData);
		if (!response) return console.log('no response');
		if (response.status === 200) {
			toast.show({ title: 'Login Success' });
			dispatch({
				type: 'LOGIN',
				payload: response.data.data,
			});
			setFormData({
				email: '',
				password: '',
			});
			navigation.navigate('Main');
		} else {
			toast.show({ title: response.data.errors ? response.data.errors : response.data.message });
		}
	}
	return (
		<Box bg={'gray.200'} flex={1} justifyContent='center' px={6}>
			<CustomInput
				type='email'
				placeholder='Email'
				mb={5}
				value={formData.email}
				onChangeText={(text) => setFormData({ ...formData, email: text })}
			/>
			<CustomInput
				type='password'
				placeholder='Password'
				mb={5}
				value={formData.password}
				onChangeText={(text) => setFormData({ ...formData, password: text })}
			/>
			<CustomButton title='Login' mb={3} onPress={handleLogin} />
			<TouchableOpacity onPress={() => navigation.navigate('Register')}>
				<Text textAlign='center' color={'primary.500'}>
					Don't have an account ?
				</Text>
			</TouchableOpacity>
		</Box>
	);
}

export default Login;
