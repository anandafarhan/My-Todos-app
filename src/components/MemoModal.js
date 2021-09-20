import React from 'react';
import { Box, Button, Input, Modal, TextArea } from 'native-base';

function MemoModal(props) {
	return (
		<Modal isOpen={props.showModal} onClose={props.closeModal}>
			<Modal.Content>
				<Modal.Body>
					<Input
						color='#000'
						variant='underlined'
						size='xl'
						bg='#FFF'
						mb={3}
						placeholder='Title'
						value={props.formData.title}
						onChangeText={(text) => props.setFormData({ ...props.formData, title: text })}
					/>
					<Box maxHeight={500}>
						<TextArea
							color='#393939'
							placeholder='Write something here..'
							value={props.formData.memo}
							onChangeText={(text) => props.setFormData({ ...props.formData, memo: text })}
						/>
					</Box>
				</Modal.Body>
				<Modal.Footer justifyContent='space-between'>
					{props.formData.eid ? props.onSave : props.onPress}
					<Button
						colorScheme='danger'
						size='sm'
						_text={{
							color: '#FFF',
							fontSize: 15,
						}}
						onPress={props.formData.eid ? props.onDelete : props.closeModal}
					>
						{props.formData.eid ? 'Delete!' : 'Cancel'}
					</Button>

					<Button
						colorScheme='primary'
						size='sm'
						_text={{ color: '#FFF', fontSize: 15 }}
						onPress={props.formData.eid ? props.onSave : props.onPress}
					>
						Save
					</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	);
}

export default MemoModal;
