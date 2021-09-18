import React from 'react';
import { Box, Heading, Text } from 'native-base';

const MemoCard = (props) => {
	return (
		<Box bg='white' shadow={3} rounded='lg' p={4} maxHeight={180} mt={4}>
			<Heading size='lg' color='#000' mb={5}>
				Heading
			</Heading>
			<Text color='#393939' noOfLines={5} isTruncated>
				Lorem Ipsum dolorLorem Ipsum dolorLorem Ipsum dolorLorem Ipsum dolorLorem Ipsum dolorLorem Ipsum
				dolorLorem Ipsum dolorLorem Ipsum dolorLorem Ipsum dolorLorem Ipsum dolorLorem Ipsum dolorLorem
				Ipsum dolor
			</Text>
		</Box>
	);
};

export default MemoCard;
