import React from 'react';
import { Button } from 'native-base';

const CustomButton = (props) => {
	return (
		<Button
			colorScheme={props.scheme ? props.scheme : 'primary'}
			_text={{
				color: '#FFF',
				fontSize: 18,
			}}
			shadow={3}
			onPress={props.onPress}
			{...props}
		>
			{props.title ? props.title : 'Button'}
		</Button>
	);
};

export default CustomButton;
