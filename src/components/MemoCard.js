import React from 'react';
import { Box, Heading, Text } from 'native-base';
import { TouchableNativeFeedback } from 'react-native';

const MemoCard = (props) => {
	return (
		<TouchableNativeFeedback onPress={props.onPress}>
			<Box bg='white' rounded='lg' p={4} maxHeight={180} mt={4}>
				<Heading
					size='lg'
					color='#000'
					mb={5}
					borderBottomWidth={1}
					borderBottomColor={'gray.400'}
					isTruncated
				>
					{props.item.title}
				</Heading>
				<Text color='#393939' noOfLines={5} isTruncated>
					{props.item.memo}
				</Text>
			</Box>
		</TouchableNativeFeedback>
	);
};

export default MemoCard;
