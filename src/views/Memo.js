import { Box, Button, FlatList, Heading, useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import MemoCard from '../components/MemoCard';
import MemoModal from '../components/MemoModal';
import { addUserMemo, getUserMemos, updateUserMemo, deleteUserMemo } from '../config/server';

function Memo({ navigation }) {
	const toast = useToast();
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [wait, setWait] = useState(false);
	const [memos, setMemos] = useState([]);
	const [formData, setFormData] = useState({
		title: '',
		memo: '',
		status: 0,
	});

	function closeModal() {
		setShowModal(false);
		setFormData({
			title: '',
			memo: '',
			status: 0,
		});
	}

	async function handleSubmit() {
		if (formData.title.length < 1 || formData.memo.length < 1)
			return toast.show({ title: 'Please complete any empty field' });
		setWait(true);
		await addUserMemo(formData);
		closeModal();
		setFormData({
			title: '',
			memo: '',
			status: 0,
		});
		setWait(false);
	}

	async function handleSubmitEdit() {
		if (formData.title.length < 1 || formData.memo.length < 1)
			return toast.show({ title: 'Please complete any empty field' });
		setWait(true);
		await updateUserMemo(formData, formData.eid);
		closeModal();
		setFormData({
			title: '',
			memo: '',
			status: 0,
		});
		setWait(false);
	}

	async function deleteMemo() {
		setWait(true);
		await deleteUserMemo(formData.eid);
		closeModal();
		setFormData({
			title: '',
			memo: '',
			status: 0,
		});
		setWait(false);
	}

	function editMemo(item) {
		setFormData({
			eid: item.id,
			title: item.title,
			memo: item.memo,
			status: 0,
		});
		setShowModal(true);
	}

	async function loadMemos() {
		setLoading(true);
		const response = await getUserMemos();
		setMemos(response ? response.memos : []);
		setLoading(false);
	}

	useEffect(() => {
		loadMemos();
	}, [wait]);

	return (
		<Box bg={'gray.200'} flex={1}>
			<Box mb={70}>
				{memos.length < 1 ? (
					<Heading color={'gray.400'} textAlign='center' mt={3}>
						Nope, nothing here
					</Heading>
				) : (
					<FlatList
						data={memos}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => <MemoCard item={item} onPress={() => editMemo(item)} />}
						refreshControl={<RefreshControl refreshing={loading} onRefresh={loadMemos} />}
						px={6}
					/>
				)}
			</Box>
			<Button
				colorScheme='primary'
				_text={{ fontSize: 30 }}
				borderRadius={25}
				shadow={3}
				position='absolute'
				bottom={75}
				right={4}
				w={50}
				h={50}
				onPress={() => setShowModal(true)}
			>
				+
			</Button>
			<MemoModal
				showModal={showModal}
				closeModal={closeModal}
				formData={formData}
				setFormData={setFormData}
				onPress={handleSubmit}
				onSave={handleSubmitEdit}
				onDelete={deleteMemo}
			/>
		</Box>
	);
}

export default Memo;
