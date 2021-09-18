import React from 'react';
import { Box, Text, Checkbox } from 'native-base';

const TodoCard = (props) => {
	return (
		<Box
			bg='white'
			shadow={3}
			rounded='lg'
			py={4}
			px={1}
			maxHeight={20}
			mt={4}
			justifyContent='flex-start'
			flexDirection='row'
		>
			<Checkbox value='one' colorScheme='primary' mx={2}>
				<Text color='#393939' noOfLines={1} mx={2} isTruncated>
					Walk the Dog Walk the Dog Walk the Dog Walk the Dog
				</Text>
			</Checkbox>
		</Box>
	);
};

export default TodoCard;
