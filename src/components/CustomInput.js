import React from 'react';
import { Input } from 'native-base';

const CustomInput = (props) => {
	return (
		<Input
			variant='unstyled'
			color={'gray.600'}
			bg={'white'}
			shadow={3}
			placeholder={props.placeholder ? props.placeholder : 'Input'}
			{...props}
		/>
	);
};

export default CustomInput;
