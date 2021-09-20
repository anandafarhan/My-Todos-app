import { Box } from 'native-base';
import React from 'react';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

function VaultAuth(props) {
	return (
		<Box bg={'gray.200'} flex={1} justifyContent='center' px={6}>
			<CustomInput
				type='password'
				placeholder='Security Pin'
				mb={5}
				value={props.pin}
				onChangeText={(text) => props.setPin(text)}
			/>
			<CustomButton title='Let me in!' onPress={props.onPress} />
		</Box>
	);
}

export default VaultAuth;
