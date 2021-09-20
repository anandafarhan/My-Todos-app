import React, { useState } from 'react';
import { Box, TextArea, Button, Input, HStack } from 'native-base';
import { addUserMemo } from '../config/server';

const MemoInput = ({ route, navigation }) => {
	const [formData, setFormData] = useState({ title: '', memo: '', status: 0 });

	async function handleSubmit() {
		await addUserMemo(formData);
		setFormData({ title: '', memo: '', status: 0 });
		navigation.goBack();
	}

	return (
		<Box bg='white' rounded='lg' p={4} maxHeight={800} mt={4}>
			<Input
				color='#000'
				variant='underlined'
				size='xl'
				bg='#FFF'
				mb={3}
				placeholder='Title'
				value={formData.title}
				onChangeText={(text) => setFormData({ ...formData, title: text })}
			/>
			<Box maxHeight={600}>
				<TextArea
					color='#393939'
					placeholder='Write something here..'
					value={formData.memo}
					onChangeText={(text) => setFormData({ ...formData, memo: text })}
				/>
			</Box>
			<HStack mt={2} justifyContent='space-between'>
				{route ? (
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
				) : (
					<></>
				)}

				<Button
					colorScheme='primary'
					size='sm'
					_text={{
						color: '#FFF',
						fontSize: 15,
					}}
					onPress={handleSubmit}
				>
					Save
				</Button>
			</HStack>
		</Box>
	);
};

export default MemoInput;
