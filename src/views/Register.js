import React, { useContext, useState } from 'react';
import { Box, Text, useToast } from 'native-base';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { registerUser } from '../config/server';
import { AppContext } from '../context/AppContext';

function Register({ navigation }) {
	const toast = useToast();
	const [state, dispatch] = useContext(AppContext);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		pin: '',
	});

	async function handleRegister() {
		const response = await registerUser(formData);
		if (!response) return console.log('no response');
		if (response.status === 201) {
			toast.show({ title: 'Register Success' });
			dispatch({
				type: 'REGISTER',
				payload: response.data.data,
			});
			setFormData({
				name: '',
				email: '',
				password: '',
				pin: '',
			});
			navigation.navigate('Main');
		} else {
			toast.show({ title: response.data.errors ? response.data.errors : response.data.message });
		}
	}

	return (
		<Box bg={'gray.200'} flex={1} justifyContent='center' px={6}>
			<CustomInput
				placeholder='Name'
				mb={5}
				value={formData.name}
				onChangeText={(text) => setFormData({ ...formData, name: text })}
			/>
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
			<CustomInput
				type='password'
				placeholder='Pin'
				mb={5}
				value={formData.pin}
				onChangeText={(text) => setFormData({ ...formData, pin: text })}
			/>
			<CustomButton title='Register' mb={3} onPress={handleRegister} />

			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text textAlign='center' color={'primary.500'}>
					Already have an account ?
				</Text>
			</TouchableOpacity>
		</Box>
	);
}

export default Register;
