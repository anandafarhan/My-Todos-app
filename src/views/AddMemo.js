import { Box } from 'native-base';
import React from 'react';
import MemoInput from '../components/MemoInput';

function AddMemo() {
	return (
		<Box bg={'gray.100'} flex={1} justifyContent='center' px={6}>
			<MemoInput />
		</Box>
	);
}

export default AddMemo;
