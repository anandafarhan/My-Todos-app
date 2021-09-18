import { Box, ScrollView } from 'native-base';
import React from 'react';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import MemoCard from '../components/MemoCard';
import MemoInput from '../components/MemoInput';
import TodoCard from '../components/TodoCard';
import TodoInput from '../components/TodoInput';

function DevMode() {
	return (
		<Box flex={1} justifyContent='center' pt={10}>
			<ScrollView px={5}>
				<CustomInput placeholder='Name' />
				<CustomInput type='email' placeholder='Email' />
				<CustomInput type='password' placeholder='Password' />
				<CustomButton title='Register' mb={2} />
				<CustomButton title='Login' />
				<MemoCard />
				<MemoInput />
				<TodoCard />
				<TodoInput />
			</ScrollView>
		</Box>
	);
}

export default DevMode;
