import React from 'react';
import { Box, Text, Checkbox } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const TodoCard = (props) => {
	return (
		<Box
			bg={props.item.status ? 'gray.100' : 'white'}
			opacity={props.item.status ? 0.9 : 1}
			rounded='lg'
			py={4}
			px={1}
			maxHeight={20}
			mt={4}
			justifyContent='space-between'
			flexDirection='row'
		>
			<Checkbox
				value='one'
				colorScheme='primary'
				mx={1}
				maxWidth={295}
				onChange={props.onChange}
				isChecked={props.item.status}
			>
				<Text color='#393939' noOfLines={1} mx={2} strikeThrough={props.item.status} isTruncated>
					{props.item.todo}
				</Text>
			</Checkbox>
			<TouchableOpacity onPress={props.onDelete}>
				<MaterialCommunityIcons name='delete-forever-outline' size={23} color='#FF563F' />
			</TouchableOpacity>
		</Box>
	);
};

export default TodoCard;
