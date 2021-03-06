import React, { useState } from 'react';
import { HStack, Input, Button, Box } from 'native-base';

const TodoInput = ({ inputValue, handleInput, onPress }) => {
	return (
		<Box position='absolute' bottom={75} w='100%' px={4} justifyContent='center' alignItems='center'>
			<HStack h={50} w='100%' justifyContent='space-between'>
				<Box w='85%' px={2}>
					<Input
						variant='unstyled'
						color={'gray.600'}
						bg='#FFF'
						placeholder='What to do ?'
						maxLength={28}
						value={inputValue}
						onChangeText={(text) => handleInput(text)}
					/>
				</Box>
				<Button
					colorScheme='primary'
					borderRadius={25}
					w={50}
					h={50}
					_text={{ fontSize: 30 }}
					onPress={onPress}
				>
					+
				</Button>
			</HStack>
		</Box>
	);
};

export default TodoInput;
