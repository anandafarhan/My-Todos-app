import React from 'react';
import { Box, TextArea, Button, Input, HStack } from 'native-base';

const MemoInput = (props) => {
	return (
		<Box bg='white' shadow={3} rounded='lg' p={4} maxHeight={500} mt={4}>
			<Input color='#000' variant='underlined' size='xl' bg='#FFF' mb={3} placeholder='Title' />
			<TextArea color='#393939' totalLines={12} placeholder='Write something here..' />
			<HStack mt={2} justifyContent='space-between'>
				<Button
					colorScheme='danger'
					size='sm'
					_text={{
						color: '#FFF',
						fontSize: 15,
					}}
					onPress={props.onPress}
					{...props}
				>
					Delete!
				</Button>
				<Button
					colorScheme='primary'
					size='sm'
					_text={{
						color: '#FFF',
						fontSize: 15,
					}}
					onPress={props.onPress}
					{...props}
				>
					Save
				</Button>
			</HStack>
		</Box>
	);
};

export default MemoInput;
